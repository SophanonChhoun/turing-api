<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSoftDeleteToProductAttributes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_attributes', function (Blueprint $table) {
            if (!Schema::hasColumn('product_attributes', 'deleted_at'))
            {
                $table->softDeletes();
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
        Schema::table('product_attributes', function (Blueprint $table) {
            if (Schema::hasColumn('product_attributes', 'deleted_at'))
            {
                $table->dropColumn('deleted_at');
            }
        });
    }
}
