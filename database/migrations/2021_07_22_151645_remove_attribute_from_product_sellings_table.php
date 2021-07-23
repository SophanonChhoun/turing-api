<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveAttributeFromProductSellingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_sellings', function (Blueprint $table) {
            if (Schema::hasColumn("product_sellings", "attribute")) {
                $table->dropColumn("attribute");
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
        Schema::table('product_sellings', function (Blueprint $table) {
            //
        });
    }
}
