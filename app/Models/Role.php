<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Role extends Model
{
    use HasFactory;
    protected $fillable = [
      'name',
      'defaultRole',
      'description',
      'status'
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    public function rolePermission()
    {
        return $this->hasMany(RoleHasPermission::class, "roleId");
    }

    public static function hasRole($id)
    {
        $userRoles = RoleHasUser::where("userId", $id)->get()->groupBy("roleId");
        $roleIds = [];
        $i = 0;
        foreach ($userRoles as $key => $role)
        {
            $roleIds[$i] = $key;
            $i++;
        }
        $roleHasPermissions = RoleHasPermission::with("permission")->whereIn("roleId", $roleIds)->get()->groupBy("permissionId");
        $getRoles = [];
        $i = 0;
        foreach ($roleHasPermissions as $index => $permissions)
        {
            $create = false;
            $read = false;
            $delete = false;
            $update = false;
            foreach ($permissions as $key => $permission)
            {
                if ($key == 0)
                {
                    $create = $permission->create;
                    $read = $permission->read;
                    $delete = $permission->delete;
                    $update = $permission->update;
                    $name = $permission->permission->name;
                }
                $create = $create ? $create : ($permission->create ? true : false);
                $read = $read ? $read : ($permission->read ? true : false);
                $update = $update ? $update : ($permission->update ? true : false);
                $delete = $delete ? $delete : ($permission->delete ? true : false);
            }
            $getRoles[$i] = [
                "id" => $index,
                "name" => $name,
                "create" => $create,
                "read" => $read,
                "update" => $update,
                "delete" => $delete,
            ];
            $i++;
        }
        return $getRoles;
    }
}
