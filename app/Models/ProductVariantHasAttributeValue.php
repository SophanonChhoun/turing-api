<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductVariantHasAttributeValue extends Model
{
    use HasFactory;
    protected $fillable = [
        'productVariantId',
        'attributeValueId'
    ];

    public static function store($id, $productAttributeValues)
    {
        ProductVariantHasAttributeValue::where("productVariantId", $id)->delete();
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
