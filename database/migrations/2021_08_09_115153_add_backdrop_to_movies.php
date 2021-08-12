<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddBackdropToMovies extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('movies', function (Blueprint $table) {
            if (!Schema::hasColumn('movies', 'poster'))
            {
                $table->bigInteger('posterId');
            }
            if (!Schema::hasColumn('movies', 'backdrop'))
            {
                $table->bigInteger('backdropId');
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
        Schema::table('movies', function (Blueprint $table) {
            if (Schema::hasColumn('movies', 'posterId'))
            {
                $table->dropColumn('posterId');
            }
            if (Schema::hasColumn('movies', 'backdropId'))
            {
                $table->dropColumn('backdropId');
            }
        });
    }
}
