<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CastCrew extends Model
{
    use HasFactory;
    protected $fillable = [
        'firstName',
        'lastName',
        'mediaId'
    ];
    public function media()
    {
        return $this->hasOne(MediaFile::class,"media_id","mediaId");
    }
}
