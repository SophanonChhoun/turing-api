<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PaymentResource extends JsonResource
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
            'last4' => $this->last4,
            'brand' => $this->brand,
            'country' => $this->country,
            'exp_month' => $this->exp_month,
            'exp_year' => $this->exp_year
        ];
    }
}
