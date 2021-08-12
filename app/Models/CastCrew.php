<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CastCrew extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $dates = ['deleted_at'];
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
}
