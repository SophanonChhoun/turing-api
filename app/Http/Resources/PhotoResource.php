<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PhotoResource extends JsonResource
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
            'poster' => $this->poster,
            'backdrop' => $this->backdrop,
            'title' => $this->title,
            'trailerUrl' => $this->trailerUrl,
            'synopsis' => $this->synopsis,
            'runningTime' => $this->runningTime,
            'directors' => ListResource::collection($this->directors),
            'casts' => ListResource::collection($this->casts),
            'genres' => ListResource::collection($this->genres),
            "rating" => $this->rating->title ?? ''
         ];
    }
}
