<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RecreateProductSellingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists("product_sellings");

        Schema::create("product_sellings", function (Blueprint $table){
            $table->id();
            $table->integer("quantity");
            $table->bigInteger("saleId");
            $table->bigInteger("productVariantId");
            $table->string("name")->nullable();
            $table->string("attribute")->nullable();
            $table->double("price")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
