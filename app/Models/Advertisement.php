<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

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

    public static function showAdvertisement($data)
    {
        return [
            "id" => $data->id,
            "description" => $data->description,
            "photo" => $data->media->file_url ?? ''
        ];
    }
}
