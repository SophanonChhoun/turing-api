<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Exception;

class PromotionScreening extends Model
{
    use HasFactory;

    protected $fillable = [
        'promotionId',
        'screeningId'
    ];
    public static function store($id, $screenings)
    {
        try {
            self::where("promotionId", $id)->delete();
            foreach ($screenings as $key => $screeningId)
            {
                $screening['promotionId'] = $id;
                $screening['screeningId'] = $screeningId;
                $data = self::create($screening);
                if (!$data)
                {
                    return false;
                }
            }
            return true;
        }catch (Exception $exception){
            return false;
        }
    }
}
