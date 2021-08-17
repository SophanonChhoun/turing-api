<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerResetCode extends Model
{
    use HasFactory;
    protected $fillable = [
        'userId',
        'code',
        'status'
    ];
}
