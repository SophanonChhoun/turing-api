<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::updateOrCreate([
            "id" => 1,
        ],[
            "id" => 1,
            "name" => "Admin",
            "email" => "admin@Admin.com",
            "password" => 'password',
            "cinemaId" => 1,
            "status" => 1,
            "firstName" => "Sophanon",
            "lastName" => "Chhoun",
            "phoneNumber" => "061794013",
        ]);
    }
}
