<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MediaFile extends Model
{
    use HasFactory;
    protected $table = 'media_files';

    protected $fillable = [
        'id', 'media_file', 'file_url', 'file_name', 'size', 'media_id', 'file_base64'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    function getFileUrlAttribute($value) {
        return url('/') . $value;
    }

    function getNameAttribute() {
        return substr($this->file_name, 8);
    }

    public function media()
    {
        return $this->belongsTo(
            Media::class
        );
    }
}
