<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TicketSaleResource extends JsonResource
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
            'customer' => $this->customer->name ?? '',
            'movie' => $this->screening->movie->title ?? '',
            'seat' => $this->screening->seat ?? '',
            'cinema' => $this->cinema->name ?? '',
            'total' => $this->total,
        ];
    }
}
