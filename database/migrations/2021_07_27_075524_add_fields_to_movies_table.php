<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToMoviesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('movies', function (Blueprint $table) {
            if (!Schema::hasColumn("movies", "backdrop")) {
                $table->string("backdrop");
            }
            if (!Schema::hasColumn("movies", "poster")) {
                $table->string("poster");
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
            if (Schema::hasColumn("movies", "backdrop")) {
                $table->dropColumn("backdrop");
            }
            if (Schema::hasColumn("movies", "poster")) {
                $table->dropColumn("poster");
            }
        });
    }
}
