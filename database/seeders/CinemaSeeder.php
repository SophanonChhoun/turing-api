<?php

namespace Database\Seeders;

use App\Models\Cinema;
use Illuminate\Database\Seeder;

class CinemaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Cinema::create([
            "name" => "Turing TK",
            "location" => "PP TK ",
            "status" => 1,
            "mediaId" => 1,
        ]);
    }
}
