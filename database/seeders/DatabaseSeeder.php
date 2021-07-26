<?php

namespace Database\Seeders;

use App\Http\Resources\CastCrewResource;
use App\Models\ProductAttributes;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);
        $this->call(CustomerSeeder::class);
        $this->call(PermissionSeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(ProductAttribute::class);
        $this->call(ProductAttributeValueSeeder::class);
        $this->call(CastCrewSeeder::class);
        $this->call(CinemaSeeder::class);
        $this->call(TheaterSeeder::class);
        $this->call(CurrencySeeder::class);
    }
}
