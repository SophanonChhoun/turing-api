<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMoviesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->string("trailerUrl")->nullable();
            $table->string("synopsis")->nullable();
            $table->bigInteger("ratedId");
            $table->integer("runningTime");
            $table->bigInteger("mediaId");
            $table->boolean("status")->default(false);
            // Movie Description
            $table->bigInteger("backdrop");
            $table->date("releasedDate");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movies');
    }
}
