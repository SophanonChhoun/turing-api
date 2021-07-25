<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TicketSale extends Model
{
    use HasFactory;
    protected $table = "ticket_sales";
    protected $fillable = [
      'userId',
      'cinemaId',
      'total',
      'screeningId'
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'userId', 'id');
    }

    public function cinema()
    {
        return $this->belongsTo(Cinema::class, 'cinemaId', 'id');
    }

    public function screening()
    {
        return $this->belongsTo(Screening::class, 'screeningId', 'id');
    }
}
