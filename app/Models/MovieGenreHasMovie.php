<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MovieGenreHasMovie extends Model
{
    use HasFactory;
    protected $table = 'movie_genre_has_movies';
    use SoftDeletes;

    protected $dates = ['deleted_at'];
    protected $fillable = [
      'movieId',
      'movieGenreId'
    ];

    public static function store($id, $genres)
    {
        self::where("movieId", $id)->forceDelete();
        foreach ($genres as $key => $genre)
        {
            $data = self::create([
                "movieId" => $id,
                "movieGenreId" => $genre
            ]);
            if(!$data)
            {
                return false;
            }
        }
        return true;
    }
}
