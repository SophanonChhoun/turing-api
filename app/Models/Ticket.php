<?php

namespace App\Models;

use App\Models\Seat;
use App\Models\Screening;
use App\Models\TicketSale;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Exception;

class Ticket extends Model
{
    use HasFactory;
    protected $fillable = [
        'price',
        'seatId',
        'checked_in',
        'seatType',
        'seatName',
        'screeningId',
        'theaterName',
        'movieName',
        'cinemaName',
        'userId'
    ];
    protected $casts = [
        'checked_in' => 'boolean'
    ];

    public function screening()
    {
        return $this->belongsTo(Screening::class, 'screeningId', 'id');
    }

    public function seat()
    {
        return $this->belongsTo(Seat::class, 'seatId', 'id');
    }

    public function user()
    {
        return $this->belongsTo(Customer::class, 'userId', 'id');
    }
}
