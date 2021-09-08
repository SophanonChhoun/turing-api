<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CastCrew extends Model
{
    use HasFactory;
    protected $fillable = [
        'firstName',
        'lastName',
        'mediaId'
    ];

    public function getNameAttribute()
    {
        return $this->firstName . " " . $this->lastName;
    }

    public function media()
    {
        return $this->hasOne(MediaFile::class,"media_id","mediaId");
    }

    public static function showCast($data)
    {
        return [
            "firstName" => $data->firstName,
            "lastName" => $data->lastName,
            "photo" => $data->media->file_url ?? '',
        ];
    }
}
