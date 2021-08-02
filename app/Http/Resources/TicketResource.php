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
            'movie' => $this->movieName,
            'seat' => $this->seatName,
            'cinema' => $this->theaterName,
            'customer' => $this->user->name ?? '',
            'theater' => $this->theaterName,
            'checked_in'=> $this->checked_in
        ];
    }
}
