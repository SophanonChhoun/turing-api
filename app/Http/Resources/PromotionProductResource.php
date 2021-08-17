<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PromotionProductResource extends JsonResource
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
            'allProducts' => $this->productIds->count() > 0 ? false : true,
            'productIds' => $this->productIds->pluck('productId')
        ];
    }
}
