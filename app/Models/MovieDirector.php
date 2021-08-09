<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MovieDirector extends Model
{
    use HasFactory;
    protected $table = "movie_directors";
    use SoftDeletes;

    protected $dates = ['deleted_at'];
    protected $fillable = [
        "movieId",
        "directorId"
    ];

    public static function store($id, $directors)
    {
        self::where("movieId", $id)->delete();
        foreach ($directors as $key => $director)
        {
            $data = self::create([
                "movieId" => $id,
                "directorId" => $director
            ]);
            if(!$data)
            {
                return false;
            }
        }

        return true;
    }
}
