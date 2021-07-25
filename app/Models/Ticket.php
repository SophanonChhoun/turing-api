<?php

namespace App\Models;

use App\Models\Seat;
use App\Models\Screening;
use App\Models\TicketSale;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ticket extends Model
{
    use HasFactory;
    protected $fillable = [
        'price',
        'screeningId',
        'seatId',
        'paymentId',
        'checked_in'
    ];

    public function screening()
    {
        return $this->belongsTo(Screening::class, 'screeningId', 'id');
    }

    public function seat()
    {
        return $this->belongsTo(Seat::class, 'seatId', 'id');
    }

    public function payment()
    {
        return $this->belongsTo(TicketSale::class, 'paymentId', 'id');
    }
}
