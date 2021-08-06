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
      'code'
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    public function getNameAttribute()
    {
        $data = $this->productAttributeValues()->pluck("name");
        $name = $this->product->name;
        foreach ($data as $key => $productAttribute)
        {
            $name = $name . ' ' . $productAttribute;
        }
        return $name;
    }

    public function getProductCodeAttribute()
    {
        return $this->id .'. ' . $this->product->name;
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'productId', 'id');
    }

    public function productAttributeValues()
    {
        return $this->belongsToMany(ProductAttributeValue::class, ProductVariantHasAttributeValue::class, 'productVariantId', 'attributeValueId');
    }

    public function hasAttributeValues()
    {
        return $this->hasMany(ProductVariantHasAttributeValue::class, 'productVariantId');
    }
}
