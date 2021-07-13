<?php

namespace App\Http\Controllers;

use App\Http\Resources\RolePermissionResource;
use App\Http\Resources\RoleResource;
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
            $user = User::with("roles.rolePermission", "media")->where('email', $request->email)->first();
            if(!$user || !Hash::check($request->password, $user->password)) {
                return $this->fail('These credentials do not match our records.');
            }
            $token = $user->createToken('authorization')->plainTextToken;
            $response = [
                'user' => [
                    "name" => $user->name,
                    "photo" => $user->media->file_url ?? '',
                    "rolePermissions" => RoleResource::collection($user->roles)
                ],
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
