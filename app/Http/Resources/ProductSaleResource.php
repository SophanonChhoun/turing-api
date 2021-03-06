<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductSaleResource extends JsonResource
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
            "userName" => $this->user->name ?? '',
            "cinema" => $this->cinema->name ?? '',
            "total" => $this->total,
            "currency" => $this->currency
        ];
    }
}
