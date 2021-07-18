<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Theater extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'row',
        'col',
        'cinemaId',
        'mediaId',
        'status',
        'seatId',
    ];

    public function cinema()
    {
        return $this->hasOne(Cinema::class, 'id', 'cinemaId');
    }

    public function media()
    {
        return $this->hasOne(MediaFile::class,"media_id","mediaId");
    }
    public function seat(){
        return $this->hasMany(Seat::class,"theaterId");
    }
}
