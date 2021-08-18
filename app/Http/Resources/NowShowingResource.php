<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NowShowingResource extends JsonResource
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
            "title" => $this->title,
            "synopsis" => $this->synopsis,
            "rating" => $this->rating->title ?? '',
            'directors' => ListResource::collection($this->directors),
            'casts' => ListResource::collection($this->casts),
            'genres' => ListResource::collection($this->genres),
            "poster" => $this->poster,
            "backdrop" => $this->backdrop,
            "trailerUrl" => $this->trailerUrl,
            "cinemas" => CinemaShowingResource::collection($this->cinemas)
        ];
    }
}
