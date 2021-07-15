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

    public function product()
    {
        return $this->belongsTo(Product::class, 'id', 'productId');
    }

    public function productAttributeValue()
    {
        return $this->belongsTo(ProductAttributeValue::class, 'id', 'productAttributeValueId');
    }
}
