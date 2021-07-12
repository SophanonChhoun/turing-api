<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Testing\Fluent\Concerns\Has;
use Exception;

class UserController extends Controller
{
    public function login(Request $request)
    {
        try {
            $user = User::where('email', $request->email)->first();
            if(!$user || !Hash::check($request->password, $user->password)) {
                return $this->fail('These credentials do not match our records.');
            }
            $token = $user->createToken('authorization')->plainTextToken;

            $response = [
                'user' => $user,
                'token' => 'Bearer ' . $token,
            ];

            return $this->success($response);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function test()
    {
        return $this->success('Hehe');
    }
}
