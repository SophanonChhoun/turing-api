<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MovieRating extends Model
{
    use HasFactory;
    public $fillable = [
      'title',
      'description',
      'status'
    ];

    protected $casts = [
        'status' => 'boolean'
    ];
}


