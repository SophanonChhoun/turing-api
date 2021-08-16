<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveSoftDeleteFromProductVariantHasAttributeValues extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_variant_has_attribute_values', function (Blueprint $table) {
            if (Schema::hasColumn("product_variant_has_attribute_values", "deleted_at")) {
                $table->dropColumn("deleted_at");
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
        Schema::table('product_variant_has_attribute_values', function (Blueprint $table) {
            //
        });
    }
}
