<?php

namespace App\Models;

use Carbon\Carbon;
use Carbon\Language;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = [
      'title',
      'trailerUrl',
      'synopsis',
      'ratedId',
      'runningTime',
      'posterId',
      'status',
      'backdropId',
      'releasedDate'
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    public function getPosterAttribute()
    {
        return $this->posterImage->name ?? '';
    }

    public function getBackdropAttribute()
    {
        return $this->backdropImage->name ?? '';
    }

    public function rating()
    {
        // select * from movies join movieRating on movies.ratedId = movieRating.id
        return $this->belongsTo(MovieRating::class, 'ratedId', 'id');
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

    public function movieDirectors()
    {
        return $this->hasMany(MovieDirector::class,"movieId");
    }

    public function movieCasts()
    {
        return $this->hasMany(MovieCast::class,"movieId");
    }

    public function movieGenres()
    {
        return $this->hasMany(MovieGenreHasMovie::class,"movieId");
    }

    public function screenings()
    {
        return $this->hasMany(Screening::class,"movieId");
    }

    public function availableScreenings()
    {
        return $this->screenings()->where('status', true)
            ->where("date", Carbon::now()->toDateString())
            ->orderByDesc("date");
    }

    public function posterImage()
    {
        return $this->belongsTo(MediaFile::class, 'posterId', 'media_id');
    }

    public function backdropImage()
    {
        return $this->belongsTo(MediaFile::class, 'backdropId', 'media_id');
    }
}
