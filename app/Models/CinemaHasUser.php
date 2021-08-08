<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CinemaHasUser extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $dates = ['deleted_at'];
    protected $fillable = [
      'userId',
      'cinemaId',
    ];

    public static function store($id, $cinemas)
    {
        self::where("userId", $id)->delete();
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
