<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MovieGenreHasMovie extends Model
{
    use HasFactory;
    protected $table = 'movie_genre_has_movies';
    protected $fillable = [
      'movieId',
      'movieGenreId'
    ];
}
