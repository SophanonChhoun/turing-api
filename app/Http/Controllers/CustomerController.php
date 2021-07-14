<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignUpRequest;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Exception;

class CustomerController extends Controller
{
    public function login(LoginRequest $request)
    {
        try {
            $user = Customer::with("media")->where('email', $request->email)->first();
            if(!$user || !Hash::check($request->password, $user->password)) {
                return $this->fail('These credentials do not match our records.');
            }
            $token = $user->createToken('authorization')->plainTextToken;

            $response = [
                'user' => [
                    "id" => $user->id,
                    "email" => $user->email,
                    "name" => $user->name,
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
                    "photo" => $customer->media->file_url ?? ''
                ],
                'token' => 'Bearer '. $token,
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
