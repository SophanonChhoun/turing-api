<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTicketSaleIdToTicketSales extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ticket_sales', function (Blueprint $table) {
            if (!Schema::hasColumn("ticket_sales", "ticketSaleId")) {
                $table->bigInteger("ticketSaleId");
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
            if (Schema::hasColumn("ticket_sales", "ticketSaleId")) {
                $table->dropColumn("ticketSaleId");
            }
        });
    }
}
