<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveFieldsFromLanguages extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('languages', function (Blueprint $table) {
            if (Schema::hasColumn('languages', 'sub'))
            {
                $table->dropColumn("sub");
            }
            if (Schema::hasColumn('languages', 'dub'))
            {
                $table->dropColumn("dub");
            }
        });
    }
}
