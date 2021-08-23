<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

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

    public function getNameValuesAttribute()
    {
        return $this->productAttribute ? $this->productAttribute->name . ' ' . $this->name : $this->name;
    }

    public function productAttribute()
    {
        return $this->belongsTo(ProductAttributes::class, 'productAttributeId', 'id');
    }
}
