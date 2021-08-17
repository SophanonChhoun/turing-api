<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PromotionContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'mediaId',
        'description'
    ];



    public static function store($id, $promotion_contents){
        PromotionContent::where("promotionId", $id)->forceDelete();
        foreach($promotion_contents as $promotion_content){
            PromotionContent::create([
                'promotionId' => $id,
                "id" => $promotion_content['id'],
                "description" => $promotion_content['description'],
                "mediaId" => $promotion_content['mediaId'],
            ]);
        }
    }

}
