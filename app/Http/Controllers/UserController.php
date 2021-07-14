<?php

namespace App\Http\Controllers;

use App\Core\MediaLib;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Requests\UserRequest;
use App\Http\Resources\RolePermissionResource;
use App\Http\Resources\RoleResource;
use App\Http\Resources\UserResource;
use App\Models\CinemaHasUser;
use App\Models\RoleHasUser;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Testing\Fluent\Concerns\Has;
use Exception;
use DB;

class UserController extends Controller
{
    public function login(LoginRequest $request)
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

    public function store(UserRequest $request)
    {
        DB::beginTransaction();
        try {
            if (isset($request['image']))
            {
                $request['media_id'] = MediaLib::generateImageBase64($request['image']);
            }else{
                return $this->fail('Image field is required');
            }
            $user = User::create($request->all());
            $cinemas = CinemaHasUser::store($user->id, $request['cinemas']);
            $roles = RoleHasUser::store($user->id, $request['roles']);
            if(!$user || !$cinemas || !$roles)
            {
                DB::rollback();
                return $this->fail("Something went wrong");
            }
            DB::commit();
            return $this->success([
                'message' => "User created."
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function index()
    {
        try {
            $users = User::with("media")->latest()->get();
            return $this->success(UserResource::collection($users));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $user = User::with('media', 'hasRoles', 'hasCinemas')->find($id);

            return $this->success([
                "id" => $user->id,
                "name" => $user->name,
                "email" => $user->email,
                "firstName" => $user->firstName,
                "lastName" => $user->lastName,
                "status" => $user->status,
                "photo" => $user->media->file_url ?? '',
                "roles" => $user->hasRoles->pluck("roleId"),
                "cinemas" => $user->hasCinemas->pluck("cinemaId")
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function update($id, Request $request)
    {
        DB::beginTransaction();
        try {
            if (isset($request['image']))
            {
                $request['media_id'] = MediaLib::generateImageBase64($request['image']);
            }
            $user = User::find($id)->update($request->all());
            $cinemas = CinemaHasUser::store($id, $request['cinemas']);
            $roles = RoleHasUser::store($id, $request['roles']);
            if(!$user || !$cinemas || !$roles)
            {
                DB::rollback();
                return $this->fail("Something went wrong");
            }
            DB::commit();
            return $this->success([
                'message' => "User updated."
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function updateStatus($id, StatusRequest $request)
    {
        try {
            $user = User::find($id);
            if(!$user)
            {
                return $this->fail('User not found');
            }
            $user = $user->update([
                "status" => $request['status']
            ]);
            if (!$user)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
                "message" => "User status updated."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            $user = User::find($id);
            if(!$user)
            {
                return $this->fail('User not found');
            }
            $user = $user->delete();
            if (!$user)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
                "message" => "User deleted."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
