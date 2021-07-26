<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TicketResource extends JsonResource
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
            'price' => $this->price,
            'movie' => $this->screening->movie->title ?? '',
            'seat' => $this->seat->name ?? '',
            'cinema' => $this->payment->cinema->name ?? '',
            'customer' => $this->payment->customer->name ?? '',
            'theater' => $this->screening->theater->name ?? '',
            'checked_in'=> $this->checked_in
        ];
    }
}
