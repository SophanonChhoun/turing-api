<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

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
              "id" => 4,
              "name" => "Cinemas",
              "category" => "Cinema Management",
              "slug" => "cinema"
          ],
          [
              "id" => 5,
              "name" => "Cast Crews",
              "category" => "Cast Crews Management",
              "slug" => "castCrew"
          ],
          [
              "id" => 6,
              "name" => "Languages",
              "category" => "Language Management",
              "slug" => "language"
          ],
          [
              "id" => 7,
              "name" => "Movies",
              "category" => "Movie Management",
              "slug" => "movie"
          ],
          [
              "id" => 8,
              "name" => "Movie Genres",
              "category" => "Movie Management",
              "slug" => "movieGenre"
          ],
          [
              "id" => 9,
              "name" => "Movie Rating",
              "category" => "Movie Management",
              "slug" => "movieRating"
          ],
          [
              "id" => 10,
              "name" => "Products",
              "category" => "Product Management",
              "slug" => "product"
          ],
          [
              "id" => 11,
              "name" => "Product Attribute",
              "category" => "Product Management",
              "slug" => "productAttribute"
          ],
          [
              "id" => 12,
              "name" => "Product Attribute Value",
              "category" => "Product Management",
              "slug" => "productAttributeValue"
          ],
          [
              "id" => 13,
              "name" => "Product Category",
              "category" => "Product Management",
              "slug" => "productCategory"
          ],
          [
              "id" => 14,
              "name" => "Product Sale",
              "category" => "Product Management",
              "slug" => "productSale"
          ],
          [
              "id" => 15,
              "name" => "Product Variant",
              "category" => "Product Management",
              "slug" => "productVariant"
          ],
          [
              "id" => 16,
              "name" => "Screening",
              "category" => "Movie Management",
              "slug" => "screening"
          ],
          [
              "id" => 17,
              "name" => "Seat Types",
              "category" => "Theater Management",
              "slug" => "seatType"
          ],
          [
              "id" => 18,
              "name" => "Theaters",
              "category" => "Theater Management",
              "slug" => "theater"
          ],
          [
              "id" => 19,
              "name" => "Tickets Sale",
              "category" => "Ticket Management",
              "slug" => "ticketSale"
          ],
          [
              "id" => 20,
              "name" => "Advertisement",
              "category" => "Advertisement Management",
              "slug" => "advertisement"
          ],
          [
              "id" => 21,
              "name" => "Currency",
              "category" => "Currency Management",
              "slug" => "currency"
          ],
            [
                "id" => 22,
                "name" => "Promotion",
                "category" => "Promotion Management",
                "slug" => "promotion"
            ]
        ];

        DB::table("permissions")->truncate();
        DB::table("permissions")->insert($permissions);
    }
}
