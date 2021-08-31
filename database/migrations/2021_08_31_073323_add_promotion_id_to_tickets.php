<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPromotionIdToTickets extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tickets', function (Blueprint $table) {
            if (!Schema::hasColumn('tickets', 'promotionId'))
            {
                $table->bigInteger('promotionId')->nullable();
            }
            if (!Schema::hasColumn('tickets', 'discountPrice'))
            {
                $table->double('discountPrice')->nullable();
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
        Schema::table('tickets', function (Blueprint $table) {
            if (Schema::hasColumn('tickets', 'promotionId'))
            {
                $table->dropColumn('promotionId');
            }
            if (Schema::hasColumn('tickets', 'discountPrice'))
            {
                $table->dropColumn('discountPrice');
            }
        });
    }
}
