<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductCategory extends Model
{
    use HasFactory;
    protected $table = "product_categories";
    use SoftDeletes;

    protected $dates = ['deleted_at'];
    protected $fillable = [
      'name',
      'description',
      'status',
      'mediaId'
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    public function media()
    {
        return $this->hasOne(MediaFile::class,"media_id","mediaId");
    }
}
