<?php

namespace App\Models;

use App\Http\Resources\ScreeningMobileResource;
use App\Http\Resources\ScreeningPromotionResource;
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

    public static function promotionMovie($movies, $promotionScreeningIds)
    {
        return $movies->map(function($movie) use($promotionScreeningIds){
            $movie->screenings = Screening::with('cinema')
                ->where("movieId", $movie->id)
                ->whereIn("id", $promotionScreeningIds)
                ->orderBy("date")
                ->orderBy("start_time")
                ->get();
            if (count($movie->screenings) > 0)
            {
                $movie->screenings = ScreeningPromotionResource::collection($movie->screenings);
                return $movie;
            }
        });
    }

    public static function getScreening($movies)
    {
        return $movies->filter(function($movie){
            $movie->screenings = Screening::with('cinema')->where("movieId", $movie->id)
                ->where("date", ">=", Carbon::now()->toDateString())
                ->where("status", true)
                ->orderBy("date")
                ->orderBy("start_time")
                ->get();
            if ($movie->screenings->count() > 0)
            {
                $movie->screenings = ScreeningPromotionResource::collection($movie->screenings);
                return $movie;
            }
        })->values();
    }

    public static function getNowShowing($movies, $theaterIds)
    {
        return $movies->filter(function ($movie) use ($theaterIds) {
            $movie->screenings =  Screening::whereIn("theaterId", $theaterIds)
                ->where("date", ">=", Carbon::now()->toDateString())
                ->where("movieId", $movie->id)
                ->where("status", true)
                ->orderBy("date")
                ->orderBy("start_time")
                ->get()->groupBy("date");
            if (count($movie->screenings) > 0)
            {
                return $movie;
            }
        })->values();
    }

    public static function getMobileNowShowing($movies, $theaterIds)
    {
        return $movies->filter(function ($movie) use ($theaterIds) {
            $movie->screenings =  Screening::whereIn("theaterId", $theaterIds)
                ->where("date", ">=", Carbon::now()->toDateString())
                ->where("movieId", $movie->id)
                ->where("status", true)
                ->orderBy("date")
                ->orderBy("start_time")
                ->get();
            $movie->screenings = ScreeningMobileResource::collection($movie->screenings)->collection->groupBy("date");
            if (count($movie->screenings) > 0)
            {
                return $movie;
            }
        })->values();
    }

    public static function getNowShowingAdmin($movies, $theaterIds)
    {
        return $movies->filter(function ($movie) use($theaterIds){
            $theaters = Theater::whereIn("id", $theaterIds)->get();
            $theaters = $theaters->filter(function($theater) use($movie){
                $screening = Screening::where("movieId", $movie->id)
                    ->where("theaterId", $theater->id)
                    ->where("date", ">=", Carbon::now()->toDateString())
                    ->where("status", true)
                    ->orderBy("date")->orderBy("start_time")->get()->groupBy("date");
                if ($screening->count() >= 1) {
                    $theater->screenings = collect($screening->toArray());
                    return $theater;
                }
            });
            if ($theaters->count() >= 1)
            {
                $movie->theatres = $theaters;
                return $movie;
            }
        });
    }
}
