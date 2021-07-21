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
      'productAttributeValueId'
    ];

    public function getNameAttribute()
    {
        return $this->product->name . ' ' . $this->productAttributeValue->name;
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'productId', 'id');
    }

    public function productAttributeValue()
    {
        return $this->belongsTo(ProductAttributeValue::class, 'productAttributeValueId', 'id');
    }
}
