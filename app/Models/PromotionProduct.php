<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Exception;

class PromotionProduct extends Model
{
    use HasFactory;
    protected $fillable = [
      'productId',
      'promotionId'
    ];

    public static function store($id, $products)
    {
        try {
            self::where("promotionId", $id)->delete();
            foreach ($products as $key => $productId)
            {
                $product['promotionId'] = $id;
                $product['productId'] = $productId;
                $data = self::create($product);
                if (!$data)
                {
                    return false;
                }
            }
            return true;
        }catch (Exception $exception){
            return false;
        }
    }
}
