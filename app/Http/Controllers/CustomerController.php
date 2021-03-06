<?php

namespace App\Http\Controllers;

use App\Core\MediaLib;
use App\Http\Requests\CustomerRequest;
use App\Http\Requests\CustomerStoreRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\PasswordRequest;
use App\Http\Requests\SignUpRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\CustomerResource;
use App\Http\Resources\ListResource;
use App\Mail\SendMail;
use App\Models\Customer;
use Carbon\Carbon;
use Cassandra\Custom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Exception;
use Illuminate\Support\Facades\Mail;

class CustomerController extends Controller
{
    public function login(LoginRequest $request)
    {
        try {
            $user = Customer::with("media")->where('email', $request->email)->where("status", true)->first();
            if(!$user || !Hash::check($request->password, $user->password)) {
                return $this->fail('These credentials do not match our records.');
            }
            if (!$user->status)
            {
                return $this->fail("Your account has been blocked.Please contact our team for more support.");
            }
            $token = $user->createToken('authorization')->plainTextToken;

            $response = [
                'user' => [
                    "id" => $user->id,
                    "email" => $user->email,
                    "name" => $user->name,
                    "phoneNumber" => $user->phoneNumber,
                    "photo" => $user->media->file_url ?? '',
                ],
                'token' => 'Bearer '. $token,
            ];

            return $this->success($response);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function signUp(SignUpRequest $request)
    {
        try {
            $customer = Customer::create($request->all());
            $customer = Customer::with("media")->find($customer->id);
            $token = $customer->createToken('authorization')->plainTextToken;

            return $this->success([
                'user' => [
                    "id" => $customer->id,
                    "name" => $customer->name,
                    "email" => $customer->email,
                    "phoneNumber" => $customer->phoneNumber,
                    "photo" => $customer->media->file_url ?? ''
                ],
                'token' => 'Bearer '. $token,
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function store(CustomerStoreRequest $request)
    {
        DB::beginTransaction();
        try {
            $code = self::rand_string(12);
            $request['password'] = $code;
            Customer::create($request->all());
            Mail::to($request['email'])->send(new SendMail($code, "password_mail"));
            DB::commit();
            return $this->success([
               'message' => 'Customer created.'
            ]);
        }catch (Exception $exception){
            DB::rollBack();
            return $this->fail($exception->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            Customer::findOrFail($id);
            return $this->success([
                "message" => "Customer deleted successfully."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function restoreData(Request $request)
    {
        try {
            $data = Customer::withTrashed();
            if (isset($request['date']))
            {
                $data = $data->where("deleted_at", ">=", Carbon::parse($request['date'])->toDateString());
            }
            $data->restore();
            Customer::withTrashed()->restore();
            $customers = Customer::with("media")->latest()->get();
            return $this->success(CustomerResource::collection($customers));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    function rand_string( $length ) {
        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return substr(str_shuffle($chars),0,$length);
    }

    public function show($id)
    {
        try {
            $customer = Customer::with("media")->find($id);
            if (!$customer)
            {
                return $this->fail("Customer not found.");
            }
            return $this->success([
               "id" => $customer->id,
               "name" => $customer->name,
               "email" => $customer->email,
               "status" => $customer->status,
               "phoneNumber" => $customer->phoneNumber,
               "photo" => $customer->media->file_url ?? ''
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function updateStatus($id, StatusRequest $request)
    {
        try {
            $customer = Customer::find($id);
            if(!$customer)
            {
                return $this->fail("Customer not found");
            }
            $customer = $customer->update([
               "status" => $request['status']
            ]);
            if(!$customer)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
                "message" => "Customer status updated."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function index()
    {
        try {
            $customers = Customer::with("media")->latest()->get();
            return $this->success(CustomerResource::collection($customers));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function showProfile()
    {
        try {
            $customer = Customer::with("media")->find(auth()->user()->id);
            return $this->success([
               "name" => $customer->name,
               "email" => $customer->email,
               "photo" => $customer->media->file_url ?? ''
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function updateProfile(CustomerRequest $request)
    {
        DB::beginTransaction();
        try {
            if(isset($request['image']))
            {
                $request['media_id'] = MediaLib::generateImageBase64($request['image']);
            }
            $customer = Customer::find(auth()->user()->id)->update($request->all());
            if (!$customer)
            {
                DB::rollback();
                return $this->fail("Something went wrong");
            }
            DB::commit();
            return $this->success([
               "message" => "Profile updated."
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function updatePassword(PasswordRequest $request)
    {
        try {
            $user = Customer::find(auth()->user()->id);
            if(!Hash::check($request['oldPassword'], $user->password))
            {
                return $this->fail("Your old password is not correct", "",403);
            }
            $user->update([
                'password' => $request['password']
            ]);
            return $this->success([
                "message" => "Password updated."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function listAll()
    {
        try {
            $customers = Customer::where("status", true)->get();
            return $this->success($customers);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
