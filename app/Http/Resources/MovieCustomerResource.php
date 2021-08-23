<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MovieCustomerResource extends JsonResource
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
            'synopsis' => $this->synopsis,
            'poster' => $this->poster,
            'backdrop' => $this->backdrop,
            "rated" => $this->rating->title ?? '',
            "genres" => $this->genres->pluck('name')
        ];
    }
}
