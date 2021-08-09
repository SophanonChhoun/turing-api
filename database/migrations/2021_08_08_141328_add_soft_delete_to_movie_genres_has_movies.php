<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSoftDeleteToMovieGenresHasMovies extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('movie_genre_has_movies', function (Blueprint $table) {
            if (!Schema::hasColumn('movie_genre_has_movies', 'deleted_at'))
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
        Schema::table('movie_genre_has_movies', function (Blueprint $table) {
            if (Schema::hasColumn('movie_genre_has_movies', 'deleted_at'))
            {
                $table->dropColumn('deleted_at');
            }
        });
    }
}
