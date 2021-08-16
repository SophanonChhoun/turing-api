<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductVariantHasAttributeValue extends Model
{
    use HasFactory;
    protected $fillable = [
        'productVariantId',
        'attributeValueId'
    ];

    public static function store($id, $productAttributeValues)
    {
        ProductVariantHasAttributeValue::where("productVariantId", $id)->forceDelete();
        foreach ($productAttributeValues as $key => $productAttributeValue)
        {
            $product['productVariantId'] = $id;
            $product['attributeValueId'] = $productAttributeValue;
            $data = ProductVariantHasAttributeValue::create($product);
            if (!$data)
            {
                return false;
            }
        }
        return true;
    }
}
