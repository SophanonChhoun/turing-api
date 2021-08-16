<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveSoftDeleteFromMovieDirectors extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('movie_directors', function (Blueprint $table) {
            if (Schema::hasColumn("movie_directors", "deleted_at")) {
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
        Schema::table('movie_directors', function (Blueprint $table) {
            //
        });
    }
}
