<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MovieResource extends JsonResource
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
            "rated" => $this->rating->title ?? '',
            "releasedDate" => $this->releasedDate,
            "status" => $this->status,
            "runningTime" => $this->runningTime,
            "poster" => $this->poster,
        ];
    }
}
