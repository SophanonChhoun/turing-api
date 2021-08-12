<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSoftDeleteToMovieRating extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('movie_ratings', function (Blueprint $table) {
            if (!Schema::hasColumn('movie_ratings', 'deleted_at'))
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
        Schema::table('movie_ratings', function (Blueprint $table) {
            if (Schema::hasColumn('movie_ratings', 'deleted_at'))
            {
                $table->dropColumn('deleted_at');
            }
        });
    }
}
