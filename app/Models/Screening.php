<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Exception;
use Illuminate\Database\Eloquent\SoftDeletes;

class Screening extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $dates = ['deleted_at'];
    protected $fillable = [
      'movieId',
      'price',
      'theaterId',
      'date',
      'start_time',
      'status',
      'cinemaId',
      'subId',
      'dubId'
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    public function getCinemaIdAttribute()
    {
        return $this->theater->cinemaId;
    }

    public function getSubtitleAttribute()
    {
        return $this->sub->name;
    }

    public function getDubbedAttribute()
    {
        return $this->dub->name;
    }

    public function sub()
    {
        return $this->belongsTo(Language::class, 'subId', 'id');
    }

    public function dub()
    {
        return $this->belongsTo(Language::class, 'dubId', 'id');
    }

    public function movie()
    {
        return $this->hasOne(Movie::class, 'id', 'movieId');
    }

    public function cinema()
    {
        return $this->belongsTo(Cinema::class, 'cinemaId', 'id');
    }

    public function theater()
    {
        return $this->belongsTo(Theater::class, 'theaterId', 'id');
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
