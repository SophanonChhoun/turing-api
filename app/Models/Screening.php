<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Exception;

class Screening extends Model
{
    use HasFactory;
    protected $fillable = [
      'movieId',
      'languageId',
      'price',
      'theaterId',
      'date',
      'start_time',
      'status',
      'cinemaId'
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    public function getCinemaIdAttribute()
    {
        return $this->theater->cinemaId;
    }


    public function language()
    {
        return $this->hasOne(Language::class, 'id', 'languageId');
    }

    public function movie()
    {
        return $this->hasOne(Movie::class, 'id', 'movieId');
    }

    public function cinema()
    {
        return $this->hasOne(Cinema::class, 'id', 'cinemaId');
    }

    public function theater()
    {
        return $this->hasOne(Theater::class, 'id', 'theaterId');
    }

    public function seat()
    {
        return $this->hasMany(Seat::class, 'theaterId', 'theaterId');
    }

    public static function store($id, $screenings)
    {
        try {
            foreach ($screenings as $key => $screening)
            {
                $screening['movieId'] = $id;
                $screening['cinemaId'] = Theater::find($screening['theaterId'])->cinemaId ?? 0;
                $data = self::create($screening);
                if (!$data)
                {
                    return false;
                }
            }
            return true;
        }catch (Exception $exception){
            return false;
        }
    }
}
