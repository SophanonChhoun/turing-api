<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tickets', function (Blueprint $table) {
            if (!Schema::hasColumn("tickets", "seatType")) {
                $table->string("seatType");
            }
            if (!Schema::hasColumn("movies", "poster")) {
                $table->string("seatName");
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
            if (Schema::hasColumn("tickets", "seatType")) {
                $table->dropColumn("seatType");
            }
            if (Schema::hasColumn("tickets", "poster")) {
                $table->dropColumn("seatName");
            }
        });
    }
}
