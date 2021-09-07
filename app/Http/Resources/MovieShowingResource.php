<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MovieShowingResource extends JsonResource
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
            'title' => $this->title,
            'trailerUrl' => $this->trailerUrl,
            'synopsis' => $this->synopsis,
            'runningTime' => $this->runningTime,
            'rating' => $this->rating->title ?? '',
            'poster' => $this->poster,
            'backdrop' => $this->backdrop,
            'casts' => ListResource::collection($this->casts),
            'genres' => ListResource::collection($this->genres),
            'directors' => ListResource::collection($this->directors),
            'screeningDates' => $this->screeningDates,
            'screenings' => $this->screenings
        ];
    }
}
