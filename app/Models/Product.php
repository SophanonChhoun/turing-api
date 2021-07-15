<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'categoryId',
        'mediaId',
        'status'
    ];

    public function media()
    {
        return $this->belongsTo(MediaFile::class, 'media_id', 'mediaId');
    }

    public function category()
    {
        return $this->belongsTo(ProductCategory::class, 'categoryId', 'id');
    }
}
