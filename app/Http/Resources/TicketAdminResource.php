<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TicketAdminResource extends JsonResource
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
            'movie' => $this->movieName,
            'price' => $this->price,
            'seat' => $this->seatName,
            'cinema' => $this->cinemaName,
            'customer' => $this->user->name ?? '',
            'checked_in' => $this->checked_in,
            'theatre' =>  $this->theaterName,
        ];
    }
}
