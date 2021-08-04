<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveProductAttributeValueIdFromProductVariantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_variants', function (Blueprint $table) {
            if (Schema::hasColumn("product_variants", "productAttributeValueId")) {
                $table->dropColumn("productAttributeValueId");
            }
            if (Schema::hasColumn("product_variants", "size")) {
                $table->dropColumn("size");
            }
        });
    }
}
