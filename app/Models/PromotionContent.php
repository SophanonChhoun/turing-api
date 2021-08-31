<?php

namespace App\Models;

use App\Core\MediaLib;
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
    public function getPhotoAttribute()
    {
        return $this->media->file_url ?? '';
    }

    public function media()
    {
        return $this->hasOne(MediaFile::class,"media_id","mediaId");
    }

    public static function store($id, $contents)
    {
        try {
            foreach ($contents as $key => $content)
            {
                if (isset($content['image']))
                {
                    $content['mediaId'] = MediaLib::generateImageBase64($content['image']);
                }
                $content['promotionId'] = $id;
                if (isset($content['id']))
                {
                    $data = self::find($content['id']);
                }else{
                    $data = self::create($content);
                }
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

    public static function deleteImage($promotionId)
    {
        $promotions = self::where("promotionId", $promotionId)->get();
        foreach ($promotions as $key => $promotion)
        {
            if ($promotion['mediaId'])
            {
                MediaLib::deleteImage($promotion['mediaId']);
            }
        }
    }
}
