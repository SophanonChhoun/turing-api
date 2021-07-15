<?php

namespace App\Models;

use Carbon\Language;
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
      'status'
    ];

    public function language()
    {
        return $this->belongsTo(Language::class, 'id', 'languageId');
    }

    public function movie()
    {
        return $this->belongsTo(Movie::class, 'id', 'movieId');
    }

    public function theater()
    {
        return $this->belongsTo(Theater::class, 'id', 'theaterId');
    }

    public function seat()
    {
        return $this->hasMany(Seat::class, 'theaterId', 'theaterId');
    }
}
