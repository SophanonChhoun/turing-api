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
        return $this->belongsTo(MediaFile::class, 'media_id', 'mediaId');
    }

    public function genres()
    {
        return $this->belongsToMany(MovieGenre::class, MovieGenreHasMovie::class, 'movieId', 'movieGenreId');
    }

    public function directors()
    {
        return $this->belongsToMany(CastCrew::class, MovieDirector::class, 'movieId', 'directorId');
    }

    public function casts()
    {
        return $this->belongsToMany(CastCrew::class, MovieCast::class, 'movieId', 'castId');
    }
}
