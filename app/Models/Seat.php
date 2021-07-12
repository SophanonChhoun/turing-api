<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seat extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'row',
        'col',
        'theaterId',
        'seatTypeId'
    ];

    public function seatType()
    {
        return $this->belongsTo(SeatType::class, 'seatTypeId', 'id');
    }

    public function theater()
    {
        return $this->belongsTo(Theater::class, 'theaterId', 'id');
    }
}
