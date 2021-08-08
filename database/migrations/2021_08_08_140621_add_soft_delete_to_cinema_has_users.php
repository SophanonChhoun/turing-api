<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSoftDeleteToCinemaHasUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cinema_has_users', function (Blueprint $table) {
            if (!Schema::hasColumn('cinema_has_users', 'deleted_at'))
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
        Schema::table('cinema_has_users', function (Blueprint $table) {
            if (Schema::hasColumn('cinema_has_users', 'deleted_at'))
            {
                $table->dropColumn('deleted_at');
            }
        });
    }
}
