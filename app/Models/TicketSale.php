<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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

    public function user()
    {
        return $this->belongsTo(Customer::class, 'id', 'userId');
    }

    public function cinema()
    {
        return $this->belongsTo(Cinema::class, 'id', 'cinemaId');
    }

    public function screening()
    {
        return $this->belongsTo(Screening::class, 'id', 'screeningId');
    }
}
