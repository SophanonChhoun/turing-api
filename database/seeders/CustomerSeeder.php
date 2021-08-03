<?php

namespace Database\Seeders;

use App\Models\Customer;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Customer::updateOrCreate([
            "id" => 1
          ],[
            "name" => "Sophanon Chhoun",
            "email" => "chhounsophanon@gmail.com",
            "password" => "password",
            ]
        );
        Customer::updateOrCreate([
            "id" => 2
        ],[
                "name" => "Customer walk in",
                "email" => "customer.walk.in@gmail.com",
                "password" => "password",
            ]
        );
    }
}
