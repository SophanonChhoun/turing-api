<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Theater extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'row',
        'col',
        'cinemaId',
        'mediaId',
        'status'
    ];

    public function cinema()
    {
        return $this->belongsTo(Cinema::class, 'cinemaId', 'id');
    }

    public function media()
    {
        return $this->belongsTo(MediaFile::class, 'mediaId', 'media_id');
    }
}
