<?php

namespace App\Http\Controllers;

use App\Http\Requests\RoleRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\ListResource;
use App\Http\Resources\RoleListResource;
use App\Http\Resources\RolePermissionResource;
use App\Models\Role;
use App\Models\RoleHasPermission;
use App\Models\RoleHasUser;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB;

class RoleController extends Controller
{
    public function store(RoleRequest $request)
    {
        DB::beginTransaction();
        try {
            $role = Role::create($request->all());
            RoleHasPermission::store($role->id, $request->permission);
            DB::commit();
            return $this->success([
                "message" => "Role created"
            ]);
        }catch (Exception $exception){
            DB::rollBack();
            return $this->fail($exception->getMessage());
        }
    }

    public function index()
    {
        try {
            $roles = Role::latest()->get();

            return $this->success(RoleListResource::collection($roles));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function restoreData(Request $request)
    {
        try {
            $data = Role::withTrashed();
            $permission = RoleHasPermission::withTrashed();
            $user = RoleHasUser::withTrashed();
            if (isset($request['date']))
            {
                $data = $data->where("deleted_at", ">=", Carbon::parse($request['date'])->toDateString());
                $permission = $permission->where("deleted_at", ">=", Carbon::parse($request['date'])->toDateString());
                $user = $user->where("deleted_at", ">=", Carbon::parse($request['date'])->toDateString());
            }
            $data->restore();
            $permission->restore();
            $user->restore();
            $roles = Role::latest()->get();
            return $this->success(RoleListResource::collection($roles));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $role = Role::with("rolePermission")->find($id);

            return $this->success([
                "id" => $role->id,
                "name" => $role->name,
                "description" => $role->description,
                "status" => $role->status,
                "defaultRole" => $role->defaultRole,
                "permission" => RolePermissionResource::collection($role->rolePermission)
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function update($id, RoleRequest $request)
    {
        DB::beginTransaction();
        try {
            Role::findOrFail($id)->update($request->all());
            RoleHasPermission::store($id, $request->permission);
            DB::commit();
            return $this->success([
                "message" => "Role updated"
            ]);
        }catch (Exception $exception){
            DB::rollBack();
            return $this->fail($exception->getMessage());
        }
    }

    public function destroy($id)
    {
        DB::beginTransaction();
        try {
            $role = Role::find($id);
            RoleHasPermission::where("roleId", $id)->delete();
            RoleHasUser::where("roleId", $id)->delete();
            if ( !$role)
            {
                DB::rollBack();
                return $this->fail("This role does not exist in database");
            }
            $role->delete();
            DB::commit();
            return $this->success([
                "message" => "Role deleted"
            ]);
        }catch (Exception $exception){
            DB::rollBack();
            return $this->fail($exception->getMessage());
        }
    }

    public function updateStatus($id, StatusRequest $request)
    {
        try {
            Role::find($id)->update([
                "status" => $request->status
            ]);

            return $this->success([
                "message" => "Role status updated"
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function listAll()
    {
        try {
            $data = Role::where('status', 1)->get();
            return $this->success(ListResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
