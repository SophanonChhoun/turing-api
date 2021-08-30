<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPromotionIdToProductSales extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_sales', function (Blueprint $table) {
            if (!Schema::hasColumn('product_sales', 'promotionId'))
            {
                $table->bigInteger('promotionId')->nullable();
            }
            if (!Schema::hasColumn('product_sales', 'totalDiscount'))
            {
                $table->double('totalDiscount')->default(0);
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
        Schema::table('product_sales', function (Blueprint $table) {
            if (Schema::hasColumn('product_sales', 'promotionId'))
            {
                $table->dropColumn('promotionId');
            }
            if (Schema::hasColumn('product_sales', 'totalDiscount'))
            {
                $table->dropColumn('totalDiscount');
            }
        });
    }
}
