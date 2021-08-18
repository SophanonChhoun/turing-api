<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PromotionScreeningResource extends JsonResource
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
            'id' => $this->id,
            'title' => $this->title,
            'coupon' => $this->coupon,
            'percentage' => $this->percentage,
            'bill' => $this->bill,
            'conditionTotal' => $this->conditionTotal,
            'allScreenings' => $this->screeningIds->count() > 0 ? false : true,
            'screeningIds' => $this->screeningIds->pluck('screeningId')
        ];
    }
}
