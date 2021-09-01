<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Promotion extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'coupon',
        'percentage',
        'bill',
        'conditionTotal',
        'hasProducts',
        'hasScreenings',
        'status'
    ];

    protected $casts = [
        'status' => 'boolean',
        'hasProducts' => 'boolean',
        'hasScreenings' => 'boolean'
    ];

    public function productIds()
    {
        return $this->hasMany(PromotionProduct::class, 'promotionId');
    }

    public function screeningIds()
    {
        return $this->hasMany(PromotionScreening::class, 'promotionId');
    }

    public function contents()
    {
        return $this->hasMany(PromotionContent::class, 'promotionId');
    }

    public function products()
    {
        return $this->belongsToMany(ProductVariants::class, PromotionProduct::class, 'promotionId', 'productId');
    }

    public function screenings()
    {
        return $this->belongsToMany(Screening::class, PromotionScreening::class, 'promotionId', 'screeningId');
    }

    public static function promotionScreening($promotions, $id)
    {
        return $promotions->filter(function($promotion) use($id) {
            if ($promotion->hasScreenings)
            {
                $allScreenings = PromotionScreening::where("promotionId", $promotion->id)->get()->count();
                if ($allScreenings == 0)
                {
                    return $promotion;
                }
                $screenings = PromotionScreening::where("screeningId", $id)->where("promotionId", $promotion->id)->get()->count();
                if ($screenings > 0)
                {
                    return $promotion;
                }
            }
        })->values();
    }
}
