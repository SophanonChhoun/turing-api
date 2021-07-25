<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveCinemaIdFromSeatTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('seat_types', function (Blueprint $table) {
            if (Schema::hasColumn("seat_types", "cinemaId")) {
                $table->dropColumn("cinemaId");
            }
        });
    }
}
