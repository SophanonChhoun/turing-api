<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCategoryToProductVariantAccuracies extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable("product_variant_accuracies")) {
            Schema::table('product_variant_accuracies', function (Blueprint $table) {
                if (!Schema::hasColumn("product_variant_accuracies", "category")) {
                    $table->string("category")->nullable();
                }
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('product_variant_accuracies', function (Blueprint $table) {
            if (Schema::hasColumn("product_variant_accuracies", "category")) {
                $table->dropColumn("category");
            }
        });
    }
}
