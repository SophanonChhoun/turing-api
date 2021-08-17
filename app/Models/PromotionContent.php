<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Exception;

class PromotionContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'mediaId',
        'description',
        'promotionId'
    ];

    public static function store($id, $contents)
    {
        try {
            self::where("promotionId", $id)->delete();
            foreach ($contents as $key => $content)
            {
                $content['promotionId'] = $id;
                $data = self::create($content);
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
