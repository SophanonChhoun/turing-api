<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    use HasFactory;
    protected $table = "product_categories";

    protected $fillable = [
      'name',
      'description',
      'status',
      'mediaId'
    ];

    public function media()
    {
        return $this->hasOne(MediaFile::class,"media_id","mediaId");
    }
}
