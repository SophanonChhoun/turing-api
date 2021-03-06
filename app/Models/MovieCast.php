<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MovieCast extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $dates = ['deleted_at'];
    protected $fillable = [
        "movieId",
        "castId"
    ];

    public static function store($id, $casts)
    {
        self::where("movieId", $id)->delete();
        foreach ($casts as $key => $cast)
        {
            $data = self::create([
                "movieId" => $id,
                "castId" => $cast
            ]);
            if(!$data)
            {
                return false;
            }
        }
        return true;
    }
}
