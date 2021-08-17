<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveSoftDeleteFromCastCrews extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cast_crews', function (Blueprint $table) {
            if (Schema::hasColumn("cast_crews", "deleted_at")) {
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
        Schema::table('cast_crews', function (Blueprint $table) {
            //
        });
    }
}