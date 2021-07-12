<?php

namespace App\Models;

use Carbon\Language;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = [
      'title',
      'trailerUrl',
      'synopsis',
      'ratedId',
      'runningTime',
      'mediaId',
      'status',
      'backdrop',
      'releasedDate'
    ];

    public function rating()
    {
        // select * from movies join movieRating on movies.ratedId = movieRating.id
        return $this->belongsTo(MovieRating::class, 'ratedId', 'id');
    }

    public function media()
    {
        return $this->belongsTo(MediaFile::class, 'mediaId', 'media_id');
    }

    public function categories()
    {
        return $this->belongsToMany(MovieGenre::class, MovieGenreHasMovie::class, 'movie_id', 'movieCategoryId');
    }
}
