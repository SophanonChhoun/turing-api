<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSoftDeleteToCinemas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cinemas', function (Blueprint $table) {
            if (!Schema::hasColumn('cinemas', 'deleted_at'))
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
        Schema::table('cinemas', function (Blueprint $table) {
            if (Schema::hasColumn('cinemas', 'deleted_at'))
            {
                $table->dropColumn('deleted_at');
            }
        });
    }
}
