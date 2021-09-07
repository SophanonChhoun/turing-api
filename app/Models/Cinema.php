<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cinema extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'name',
        'location',
        'status',
        'mediaId'
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    public function getPhotoAttribute()
    {
        return $this->media->file_url ?? '';
    }

    public function media()
    {
        return $this->hasOne(MediaFile::class,"media_id","mediaId");
    }
    public function theater()
    {
        return $this->hasMany(Theater::class,"cinemaId",);
    }
    public function screenings()
    {
        return $this->hasMany(Screening::class,"cinemaId",);
    }
    public function availableScreenings()
    {
        return $this->screenings()->where('status', true)->where("date", ">=", Carbon::now()->toDateString())->orderBy("date", "DESC")->orderBy("start_time", "DESC");
    }
    public function productSale()
    {
        return $this->hasMany(ProductSale::class, 'cinemaId');
    }
    public function tickets()
    {
        return $this->hasMany(Ticket::class, 'cinemaName', 'name');
    }

    public static function cinemaScreening($cinemas, $id)
    {
        return $cinemas->filter(function ($cinema) use($id) {
            $theaterIds = Theater::where("cinemaId", $cinema->id)->get()->pluck("id");
            $cinema->screenings = collect(Screening::whereIn("theaterId", $theaterIds)
                ->where("movieId", $id)
                ->where("date", ">=", Carbon::now()->toDateString())
                ->where("status", true)
                ->orderBy("date")
                ->orderBy("start_time")
                ->get()
                ->groupBy("date")->toArray());
            if ($cinema->screenings->count() > 0)
            {
                return $cinema;
            }
        });
    }

    public static function getCinemaNowShowingScreening($cinemas, $mobile = false)
    {
        return $cinemas->filter(function ($cinema) use($mobile) {
            $theaterIds = Theater::where("cinemaId", $cinema->id)->get()->pluck("id");
            $movies = Movie::with("directors",
                "rating",
                "casts",
                "genres")
                ->where("status", true)
                ->where("releasedDate", "<=", Carbon::now()->toDateString())->get();
            if (!$mobile)
            {
                $cinema->movies = Movie::getNowShowing($movies, $theaterIds);
            } else {
                $cinema->movies = Movie::getMobileNowShowing($movies, $theaterIds);
            }
            if (count($cinema->movies) >= 1)
            {
                $cinema->screeningDates = Screening::getScreeningDate($cinema->movies);
                return $cinema;
            }
        })->values();
    }
}
