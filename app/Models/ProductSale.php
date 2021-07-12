<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductSale extends Model
{
    use HasFactory;
    protected $table = "product_sales";
    protected $fillable = [
        'userId',
        'cinemaId',
        'total'
    ];

    public function user()
    {
        return $this->belongsTo(Customer::class, 'userId', 'id');
    }

    public function cinema()
    {
        return $this->belongsTo(Cinema::class, 'cinemaId', 'id');
    }

    public function product()
    {
        return $this->hasMany(ProductSelling::class, 'sale_id', 'id');
    }
}
