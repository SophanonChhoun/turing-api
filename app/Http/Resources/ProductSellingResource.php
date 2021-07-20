<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductSellingResource extends JsonResource
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
            "name" => $this->name,
            "attributeValue" => $this->attribute,
            "quantity" => $this->quantity,
            "price" => $this->price,
            "totalEachProduct" => $this->price * $this->quantity
        ];
    }
}
