<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSoftDeleteToMovieCasts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('movie_casts', function (Blueprint $table) {
            if (!Schema::hasColumn('movie_casts', 'deleted_at'))
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
        Schema::table('movie_casts', function (Blueprint $table) {
            if (Schema::hasColumn('movie_casts', 'deleted_at'))
            {
                $table->dropColumn('deleted_at');
            }
        });
    }
}
