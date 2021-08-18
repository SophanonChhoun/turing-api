<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TheaterResource extends JsonResource
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
            "id"=>$this->id,
            "name"=>$this->name,
            "rows"=>$this->row,
            "cols"=>$this->col,
            "status"=>$this->status,
            "cinema"=>$this->cinema,
        ];
    }
}
