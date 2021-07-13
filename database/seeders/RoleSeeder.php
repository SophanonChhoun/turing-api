<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            "id" => 1,
            "name" => "Super Admin",
            "description" => "Can do everything in the system",
            "defaultRole" => 0,
            "status" => 1
        ];

        $rolePermissions = [
          [ "roleId" => 1, "permissionId" => 1, "read" => 1, "create" => 1, "update" => 1, "delete" => 1 ],
          [ "roleId" => 1, "permissionId" => 2, "read" => 1, "create" => 1, "update" => 1, "delete" => 1 ],
          [ "roleId" => 1, "permissionId" => 3, "read" => 1, "create" => 1, "update" => 1, "delete" => 1 ],
          [ "roleId" => 1, "permissionId" => 4, "read" => 1, "create" => 1, "update" => 1, "delete" => 1 ],
          [ "roleId" => 1, "permissionId" => 5, "read" => 1, "create" => 1, "update" => 1, "delete" => 1 ],
          [ "roleId" => 1, "permissionId" => 6, "read" => 1, "create" => 1, "update" => 1, "delete" => 1 ],
          [ "roleId" => 1, "permissionId" => 7, "read" => 1, "create" => 1, "update" => 1, "delete" => 1 ],
          [ "roleId" => 1, "permissionId" => 8, "read" => 1, "create" => 1, "update" => 1, "delete" => 1 ],
          [ "roleId" => 1, "permissionId" => 9, "read" => 1, "create" => 1, "update" => 1, "delete" => 1 ],
          [ "roleId" => 1, "permissionId" => 10, "read" => 1, "create" => 1, "update" => 1, "delete" => 1 ],
          [ "roleId" => 1, "permissionId" => 11, "read" => 1, "create" => 1, "update" => 1, "delete" => 1 ],
          [ "roleId" => 1, "permissionId" => 12, "read" => 1, "create" => 1, "update" => 1, "delete" => 1 ],
          [ "roleId" => 1, "permissionId" => 13, "read" => 1, "create" => 1, "update" => 1, "delete" => 1 ],
          [ "roleId" => 1, "permissionId" => 14, "read" => 1, "create" => 1, "update" => 1, "delete" => 1 ],
          [ "roleId" => 1, "permissionId" => 15, "read" => 1, "create" => 1, "update" => 1, "delete" => 1 ],
          [ "roleId" => 1, "permissionId" => 16, "read" => 1, "create" => 1, "update" => 1, "delete" => 1 ],
          [ "roleId" => 1, "permissionId" => 17, "read" => 1, "create" => 1, "update" => 1, "delete" => 1 ],
          [ "roleId" => 1, "permissionId" => 18, "read" => 1, "create" => 1, "update" => 1, "delete" => 1 ],
          [ "roleId" => 1, "permissionId" => 19, "read" => 1, "create" => 1, "update" => 1, "delete" => 1 ],
        ];

        DB::table("roles")->truncate();
        DB::table("role_has_permissions")->truncate();

        DB::table("roles")->insert($roles);
        DB::table("role_has_permissions")->insert($rolePermissions);
    }
}
