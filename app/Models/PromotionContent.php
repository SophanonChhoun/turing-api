<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PromotionContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'mediaId',
        'description'
    ];
}
