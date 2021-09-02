<?php

namespace App\Models;

use App\Models\Screening;
use App\Models\Seat;
use App\Models\TicketSale;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Exception;
use Illuminate\Support\Str;

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
        'userId',
        'checked_by',
        'promotionId',
        'discountPrice'
    ];
    protected $casts = [
        'checked_in' => 'boolean'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($ticket) {
            $ticket->{$ticket->getKeyName()} = (string) Str::uuid();
        });
    }

    public function getMovieAttribute()
    {
        return $this->screening->movie ?? '';
    }

    public function getCinemaAttribute()
    {
        return $this->screening->cinema ?? '';
    }

    public function getIncrementing()
    {
        return false;
    }

    public function getKeyType()
    {
        return 'string';
    }

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

    public function checkBy()
    {
        return $this->belongsTo(User::class, 'checked_by', 'id');
    }

    public function promotion()
    {
        return $this->belongsTo(Promotion::class, 'promotionId', 'id');
    }
}
