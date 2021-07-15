<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductSelling extends Model
{
    use HasFactory;
    protected $fillable = [
        'quantity',
        'saleId',
        'productVariantAccuraciesId'
    ];

    public function product()
    {
        return $this->belongsTo(ProductVariantAccuracies::class, 'id', 'productVariantAccuraciesId');
    }
}
