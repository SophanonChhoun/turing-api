<?php

namespace Database\Seeders;

use App\Models\ProductAttributes;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductAttribute extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                "name" => "flavor",
                "status" => 0,
            ],
            [
                "name" => "size",
                "status" => 1,
            ]
        ];

        DB::table("product_attributes")->truncate();
        DB::table("product_attributes")->insert($data);
    }
}
