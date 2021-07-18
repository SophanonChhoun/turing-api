<?php

namespace Database\Seeders;

use App\Models\Theater;
use Illuminate\Database\Seeder;

class TheaterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Theater::truncate();
        $data=[
            [
                "name"=>"Hall 01",
                "row"=>30,
                "col"=>20,
                "status"=>1,
                "cinemaId"=>1,
                "mediaId"=>1,
            ],
        ];
        Theater::insert($data);
    }
}
