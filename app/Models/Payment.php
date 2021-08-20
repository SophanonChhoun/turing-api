<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $fillable = [
        'userId',
        'number',
        'cvc',
        'last4',
        'exp_month',
        'exp_year',
        'fingerprint',
        'brand',
        'country'
    ];
}
