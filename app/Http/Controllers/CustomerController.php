<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignUpRequest;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Exception;

class CustomerController extends Controller
{
    public function login(Request $request)
    {
        try {
            $user = Customer::where('email', $request->email)->first();
            if(!$user || !Hash::check($request->password, $user->password)) {
                return $this->fail('These credentials do not match our records.');
            }
            $token = $user->createToken('authorization')->plainTextToken;

            $response = [
                'user' => $user,
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
            $token = $customer->createToken('authorization')->plainTextToken;

            return $this->success([
                'user' => $customer,
                'token' => 'Bearer '. $token,
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
