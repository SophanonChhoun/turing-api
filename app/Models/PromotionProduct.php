<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PromotionProduct extends Model
{
    use HasFactory;
    protected $fillable = [
      'productId',
      'promotionId'
    ];

    public static function store($id,$promotion_products)
    {
        PromotionProduct::where("promotionId",$id)->forcedelet();
        foreach($promotion_products as $promotion_product){
            PromotionProduct::create([
                'productId' => $promotion_product['productId'],
                'promotionId' => $promotion_product['promotionId']
            ]);

        }
    }
}
