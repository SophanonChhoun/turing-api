<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductVariantAccuracies extends Model
{
    use HasFactory;
    protected $fillable = [
      'productVariantsId',
      'name',
      'price',
      'attributeValue',
      'category'
    ];
}
