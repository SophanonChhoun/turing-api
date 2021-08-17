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

    public static function store($id,$promotion_screenings){
        PromotionScreening::where("promotionId",$id)->forcedelet();
        foreach($promotion_screenings as $promotion_screening ){
            PromotionScreening::create([
                "promotionId" => $promotion_screening['promotionId'],
                "screeningId" => $promotion_screening['screeningId']
            ]);
        }
    }
}
