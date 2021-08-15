<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerSocial extends Model
{
    use HasFactory;
    protected $fillable = [
        'customer_id','social_type','social_account_id'
    ];

    public static function customerExit($customerID,$socialType)
    {
        return self::where("customer_id",$customerID)->where("social_type",$socialType)->first();
    }
}
