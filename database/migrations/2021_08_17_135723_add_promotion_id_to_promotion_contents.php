<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPromotionIdToPromotionContents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('promotion_contents', function (Blueprint $table) {
            if (!Schema::hasColumn('promotion_contents', 'promotionId'))
            {
                $table->bigInteger('promotionId');
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
        Schema::table('promotion_contents', function (Blueprint $table) {
            if (Schema::hasColumn('promotion_contents', 'promotionId'))
            {
                $table->dropColumn('promotionId');
            }
        });
    }
}
