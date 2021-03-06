<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductAttributeValue extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $dates = ['deleted_at'];
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
