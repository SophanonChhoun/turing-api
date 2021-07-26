<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCinemaIdToScreenings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('screenings', function (Blueprint $table) {
            if (!Schema::hasColumn('screenings', 'cinemaId'))
            {
                $table->bigInteger('cinemaId')->nullable();
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('screenings', function (Blueprint $table) {
            if (Schema::hasColumn('screenings', 'cinemaId'))
            {
                $table->dropColumn('cinemaId');
            }
        });
    }
}
