<?php

namespace App\Http\Controllers;

use App\Core\MediaLib;
use App\Http\Requests\CustomerRequest;
use App\Http\Requests\CustomerStoreRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\PasswordRequest;
use App\Http\Requests\SignUpRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Requests\TokenRequest;
use App\Http\Resources\CustomerListResource;
use App\Http\Resources\CustomerResource;
use App\Http\Resources\ListResource;
use App\Mail\SendMail;
use App\Models\Customer;
use App\Models\CustomerSocial;
use App\Models\CustomerSocialAccount;
use Carbon\Carbon;
use Cassandra\Custom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Exception;
use Illuminate\Support\Facades\Mail;
use Laravel\Socialite\Facades\Socialite;

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
            $request['createdType'] = "Admin Register";
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

    public function loginSocial(TokenRequest $request)
    {
        DB::beginTransaction();
        try {
            $user = Socialite::driver('google')->userFromToken($request->token);
            $customerSocial = CustomerSocial::where("social_type","google")->where("social_account_id",$user->id)->first();
            if (!$customerSocial)
            {
                $code = self::rand_string(12);
                $customer = Customer::firstOrCreate([
                    "email" => $user->email
                ],[
                    "name" => $user->name,
                    "status" =>  true,
                    "password" => $code,
                    "createdType" => "Google",
                    "imageUrl" => $user->user['picture']
                ]);
                $customerSocial = CustomerSocial::create([
                    "customer_id" => $customer->id,
                    "social_type" => "google",
                    "social_account_id" => $user->id,
                ]);
                if (!$customer)
                {
                    DB::rollBack();
                    return $this->fail("There is something wrong with create customer.");
                }
                if (!$customerSocial)
                {
                    DB::rollBack();
                    return $this->fail("There is something wrong when create customer google account");
                }
            }
            $customer = Customer::with('media')->find($customerSocial->customer_id);
            if (!$customer->status)
            {
                return $this->fail("Your account has been blocked.Please contact our team for more support.");
            }
            $token = $customer->createToken('authorization')->plainTextToken;
            DB::commit();
            return $this->success([
                'user' => [
                    "id" => $customer->id,
                    "name" => $customer->name,
                    "email" => $customer->email,
                    "phoneNumber" => $customer->phoneNumber,
                    "photo" => $customer->media ? $customer->media->file_url : ($customer->imageUrl ?? '')
                ],
                'token' => 'Bearer '. $token,
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            $data = Customer::findOrFail($id);
            MediaLib::deleteImage($data->media_id);
            $data->delete();
            return $this->success([
                "message" => "Customer deleted successfully."
            ]);
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
               "photo" => $customer->media ? $customer->media->file_url : ($customer->imageUrl ?? '')
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
               "photo" => $customer->media ? $customer->media->file_url : ($customer->imageUrl ?? '')
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
            return $this->success(CustomerListResource::collection($customers));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
