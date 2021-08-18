<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PromotionContentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'promotionId' => $this->promotionId,
            'id' => $this->id,
            'description' => $this->description,
            'photo' => $this->photo,
        ];
    }
}
