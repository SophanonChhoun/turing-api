<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
          [
              "id" => 1,
              "name" => "Users",
              "category" => "User Management",
              "slug" => "user"
          ],
          [
              "id" => 2,
              "name" => "Roles",
              "category" => "User Management",
              "slug" => "role"
          ],
          [
              "id" => 3,
              "name" => "Customers",
              "category" => "Customer Management",
              "slug" => "customer"
          ],
          [
              "" => 4,
              ""
          ]
        ];
    }
}
