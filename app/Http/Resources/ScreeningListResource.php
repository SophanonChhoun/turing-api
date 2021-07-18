<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ScreeningListResource extends JsonResource
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
            'movie_title' => $this->movie->title,
            'date' => $this->date,
            'start_time' => $this->start_time,
            'theater_title' => $this->theater->name,
            'language_dubbed' => $this->language->dub,
            'language_subtitle' => $this->language->sub,
            'status' => $this->status 
        ];
    }
}
