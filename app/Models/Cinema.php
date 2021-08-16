<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cinema extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'name',
        'location',
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
    public function theater()
    {
        return $this->hasMany(Theater::class,"cinemaId",);
    }
    public function screenings()
    {
        return $this->hasMany(Screening::class,"cinemaId",);
    }
    public function availableScreenings()
    {
        return $this->screenings()->where('status', true)->where("date", ">=", Carbon::now()->toDateString())->orderBy("date", "DESC")->orderBy("start_time", "DESC");
    }
    public function productSale()
    {
        return $this->hasMany(ProductSale::class, 'cinemaId');
    }
    public function tickets()
    {
        return $this->hasMany(Ticket::class, 'cinemaName', 'name');
    }
}
