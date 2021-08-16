<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CinemaHasUser extends Model
{
    use HasFactory;
    protected $fillable = [
      'userId',
      'cinemaId',
    ];

    public static function store($id, $cinemas)
    {
        self::where("userId", $id)->forceDelete();
        foreach ($cinemas as $key => $cinema)
        {
            $data = self::create([
                "userId" => $id,
                "cinemaId" => $cinema
            ]);
            if(!$data)
            {
                return false;
            }
        }

        return true;
    }
}
