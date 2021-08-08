<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Theater extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $dates = ['deleted_at'];
    protected $fillable = [
        'name',
        'row',
        'col',
        'cinemaId',
        'mediaId',
        'status',
        'seatId',
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    public function cinema()
    {
        return $this->hasOne(Cinema::class, 'id', 'cinemaId');
    }

    public function seat(){
        return $this->hasMany(Seat::class,"theaterId");
    }
}
