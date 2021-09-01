<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'categoryId',
        'mediaId',
        'status'
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    public function media()
    {
        return $this->belongsTo(MediaFile::class, 'mediaId', 'media_id');
    }

    public function category()
    {
        return $this->belongsTo(ProductCategory::class, 'categoryId', 'id');
    }

    public function productVariant()
    {
        return $this->hasMany(ProductVariants::class,"productId");
    }

    public static function promotionProduct($products, $promotionProductIds)
    {
        return $products = $products->map(function($product) use($promotionProductIds){
            $product->variants = ProductVariants::with("productAttributeValues")
                ->where("productId", $product->id)
                ->whereIn("id", $promotionProductIds)->get();
            if (count($product->variants) > 0)
            {
                return $product;
            }
        });
    }
}
