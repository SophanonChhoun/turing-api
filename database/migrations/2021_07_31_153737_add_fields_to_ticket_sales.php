<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToTicketSales extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ticket_sales', function (Blueprint $table) {
            if (!Schema::hasColumn("ticket_sales", "cinemaName")) {
                $table->string("cinemaName")->nullable();
            }
            if (!Schema::hasColumn("ticket_sales", "theaterName")) {
                $table->string("theaterName")->nullable();
            }
            if (!Schema::hasColumn("ticket_sales", "movieName")) {
                $table->string("movieName")->nullable();
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
        Schema::table('ticket_sales', function (Blueprint $table) {
            if (Schema::hasColumn("ticket_sales", "cinemaName")) {
                $table->dropColumn("cinemaName");
            }
            if (Schema::hasColumn("ticket_sales", "theaterName")) {
                $table->dropColumn("theaterName");
            }
            if (Schema::hasColumn("ticket_sales", "movieName")) {
                $table->dropColumn("movieName");
            }
        });
    }
}
