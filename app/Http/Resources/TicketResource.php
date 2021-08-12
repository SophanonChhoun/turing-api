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
            'seat' => $this->seatName,
            'customer' => $this->user->name ?? '',
            'theatre' => $this->theaterName,
            'checkedIn'=> $this->checked_in,
            'movie' => [
                'id' => $this->movie->id ?? '',
                'title' => $this->movie->title ?? '',
                'trailer' => $this->movie->trailerUrl ?? '',
                'synopsis' => $this->movie->synopsis ?? '',
                'rating' => $this->movie->rating->title ?? '',
                'genres' => ListResource::collection($this->movie->genres) ?? '',
                'directors' => ListResource::collection($this->movie->directors) ?? '',
                'casts' => ListResource::collection($this->movie->casts) ?? '',
                'releasedDate' => $this->movie->releasedDate ?? '',
                'poster' => $this->movie->poster ?? '',
                'backdrop' => $this->movie->backdrop ?? '',
            ],
            'screening' => [
                'id' => $this->screening->id ?? '',
                'theatre' => $this->screening->theater->name ?? '',
                'date' => $this->screening->date ?? '',
                'start_time' => $this->screening->start_time ?? '',
            ],
            'cinema' => [
                'id' => $this->screening->theater->cinema->id ?? '',
                'name' => $this->screening->theater->cinema->name ?? '',
                'location' => $this->screening->theater->cinema->location ?? '',
                'photo' => $this->screening->theater->cinema->media->file_url ?? '',
            ],
        ];
    }
}
