<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ScreeningPromotionResource extends JsonResource
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
            'date' => Carbon::parse($this->date)->format('d-m-Y'),
            'start_time' => date('g:ia', strtotime($this->start_time)),
            'theatre' => $this->theater->name ?? '',
            'cinema' => $this->cinema->name ?? '',
        ];
    }
}
