<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MovieCast extends Model
{
    use HasFactory;
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
