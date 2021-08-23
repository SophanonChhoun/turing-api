<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductVariantResource extends JsonResource
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
            "id" => $this->id,
            "name" => $this->product->name ?? '',
            "attributeValues" => $this->productAttributeValues->pluck("nameValues"),
            "price" => $this->price,
            "status" => $this->status,
            "code" => $this->code,
        ];
    }
}
