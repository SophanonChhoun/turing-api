<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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

    public function media()
    {
        return $this->hasOne(MediaFile::class,"media_id","mediaId");
    }
    public function theater(){
        return $this->hasMany(Theater::class,"cinemaId",);
    }
}
