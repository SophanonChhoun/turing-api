<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PromotionScreening extends Model
{
    use HasFactory;

    protected $fillable = [
        'promotionId',
        'screeningId'
    ];
}
