<?php

namespace Database\Seeders;

use App\Models\Currency;
use Illuminate\Database\Seeder;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Currency::updateOrCreate([
            "id" => 1
        ], [
            "name" => "Riel",
            "price" => "4000"
        ]);
    }
}
