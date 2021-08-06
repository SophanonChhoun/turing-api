<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ScreeningResource extends JsonResource
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
            'movie' => $this->movie->title ?? '',
            'cinema' => $this->cinema->name ?? '',
            'date' => $this->date,
            'start_time' => $this->start_time,
            'theater_title' => $this->theater->name ?? '',
            'language_dubbed' => $this->dub->name ?? '',
            'language_subtitle' => $this->sub->name ?? '',
            'status' => $this->status,
            'price' => $this->price,
        ];
    }
}
