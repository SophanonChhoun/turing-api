<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CinemaHasUser extends Model
{
    use HasFactory;
    protected $fillable = [
      'userId',
      'cinemaId',
    ];
}
