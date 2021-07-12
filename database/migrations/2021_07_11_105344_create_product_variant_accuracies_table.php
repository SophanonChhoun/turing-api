<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductVariantAccuraciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_variant_accuracies', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("productVariantsId");
            $table->string("name");
            $table->string("attribute");
            $table->string("attributeValue");
            $table->double("price");
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
        Schema::dropIfExists('product_variant_accuracies');
    }
}
