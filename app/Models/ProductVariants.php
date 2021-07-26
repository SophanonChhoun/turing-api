<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductVariants extends Model
{
    use HasFactory;
    protected $fillable = [
      'price',
      'status',
      'productId',
      'productAttributeValueId',
      'size'
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    public function getNameAttribute()
    {
        return $this->product->name . ' ' . $this->productAttributeValue->name . " " . $this->size;
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'productId', 'id');
    }

    public function productAttributeValue()
    {
        return $this->belongsTo(ProductAttributeValue::class, 'productAttributeValueId', 'id');
    }

    public static function store($id, $productVariants)
    {
        self::where("productId", $id)->delete();
        foreach ($productVariants as $key => $productVariant)
        {
            $productVariant['productId'] = $id;
            $data = self::create($productVariant);
            if (!$data)
            {
                return false;
            }
        }
        return true;
    }
}
