<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveAttributeFromProductVariantAccuraciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_variant_accuracies', function (Blueprint $table) {
            if (Schema::hasColumn("product_variant_accuracies", "attribute")) {
                $table->dropColumn("attribute");
            }
        });
    }
}
