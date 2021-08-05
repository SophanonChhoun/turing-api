<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSubIdToScreenings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('screenings', function (Blueprint $table) {
            if (!Schema::hasColumn("screenings", "subId")) {
                $table->bigInteger("subId");
            }
            if (!Schema::hasColumn("screenings", "dubId")) {
                $table->bigInteger("dubId");
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
        Schema::table('screenings', function (Blueprint $table) {
            if (Schema::hasColumn("screenings", "subId")) {
                $table->dropColumn("subId");
            }
            if (Schema::hasColumn("screenings", "dubId")) {
                $table->dropColumn("dubId");
            }
        });
    }
}
