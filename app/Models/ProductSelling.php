<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Exception;

class ProductSelling extends Model
{
    use HasFactory;
    protected $fillable = [
        'quantity',
        'saleId',
        'productVariantId',
        'name',
        'price',
        'attribute'
    ];

    public function product()
    {
        return $this->belongsTo(ProductVariantAccuracies::class, 'id', 'productVariantAccuraciesId');
    }

    public static function store($id,$productVariants)
    {
        ProductSelling::where("saleId", $id)->delete();
        try {
            foreach ($productVariants as $key => $productVariant)
            {
                $findProductVariant = ProductVariants::with("product", "productAttributeValue")->findOrFail($productVariant['id']);
                $data = ProductSelling::create([
                   "quantity" => $productVariant['quantity'],
                   "saleId" => $id,
                   "productVariantId" => $productVariant['id'],
                   "name" => $findProductVariant->product->name ?? '',
                   "price" => $findProductVariant->price,
                   "attribute" => $findProductVariant->productAttributeValue->name,
                ]);
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
