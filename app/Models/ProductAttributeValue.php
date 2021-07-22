<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductAttributeValue extends Model
{
    use HasFactory;
    protected $fillable = [
      'name',
      'status',
      'productAttributeId'
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    public function productAttribute()
    {
        return $this->belongsTo(ProductAttributes::class, 'productAttributeId', 'id');
    }
}
