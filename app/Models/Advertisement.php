<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Advertisement extends Model
{
    use HasFactory;
    protected $fillable = [
        'mediaId',
        'description',
        'amountSend'
    ];

    public function media()
    {
        return $this->hasOne(MediaFile::class,"media_id","mediaId");
    }

    public function getFileNameAttribute()
    {
        return $this->media->file_name;
    }
}
