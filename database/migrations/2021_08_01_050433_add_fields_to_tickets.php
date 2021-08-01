<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToTickets extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tickets', function (Blueprint $table) {
            if (!Schema::hasColumn("tickets", "cinemaName")) {
                $table->string("cinemaName")->nullable();
            }
            if (!Schema::hasColumn("tickets", "theaterName")) {
                $table->string("theaterName")->nullable();
            }
            if (!Schema::hasColumn("tickets", "movieName")) {
                $table->string("movieName")->nullable();
            }
            if (!Schema::hasColumn("tickets", "seatName")) {
                $table->string("seatName")->nullable();
            }
            if (!Schema::hasColumn("tickets", "screeningId")) {
                $table->bigInteger("screeningId");
            }
            if (!Schema::hasColumn("tickets", "userId")) {
                $table->bigInteger("userId");
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
        Schema::table('tickets', function (Blueprint $table) {
            if (Schema::hasColumn("tickets", "cinemaName")) {
                $table->dropColumn("cinemaName");
            }
            if (Schema::hasColumn("tickets", "theaterName")) {
                $table->dropColumn("theaterName");
            }
            if (Schema::hasColumn("tickets", "movieName")) {
                $table->dropColumn("movieName");
            }
            if (Schema::hasColumn("tickets", "seatName")) {
                $table->dropColumn("seatName");
            }
            if (Schema::hasColumn("tickets", "screeningId")) {
                $table->dropColumn("screeningId");
            }
            if (Schema::hasColumn("tickets", "userId")) {
                $table->dropColumn("userId");
            }
        });
    }
}
