<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SeatType extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'priceFactor',
        'status',
        'color'
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    public function cinema()
    {
        return $this->belongsTo(Cinema::class, 'cinemaId', 'id');
    }

}
