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
            "name" => $this->name,
            "location" => $this->location,
            "photo" => $this->media->file_url ?? '',
            "screeningDates" => $this->screeningDats,
            "movies" => MovieShowingResource::collection($this->movies)
        ];
    }
}
