<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    use HasFactory;
    protected $table = 'medias';
    protected $fillable = [
        'media_type', 'created_at', 'updated_at'
    ];
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function file()
    {
        return $this->hasMany(
            'App\Models\MediaFile'
        );
    }

    public static function getMediaById($id)
    {
        return \App\Models\Media::where('media_id', $id)->with('file')->get()->first();
    }

    public static function ID($id = null)
    {
        if ($id != null) {
            return Media::find($id)->id;
        }

        return null;

    }

    public static function getImageUrl($mediaId = null){
        if(is_null($mediaId)){
            return null;
        }

        return MediaFile::find($mediaId)->file_url??null;
    }
}
