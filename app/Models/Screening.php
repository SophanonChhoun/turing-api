<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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

    public function theater()
    {
        return $this->hasOne(Theater::class, 'id', 'theaterId');
    }

    public function seat()
    {
        return $this->hasMany(Seat::class, 'theaterId', 'theaterId');
    }
}
