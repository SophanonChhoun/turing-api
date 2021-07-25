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
                $data = ProductSelling::create([
                   "quantity" => $productVariant['quantity'],
                   "saleId" => $id,
                   "productVariantId" => $productVariant['id'],
                   "name" => $productVariant['name'],
                   "price" => $productVariant['price'],
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
