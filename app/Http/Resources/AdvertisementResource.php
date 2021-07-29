<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AdvertisementResource extends JsonResource
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
            'description' => strlen($this->description) <= 100 ? $this->description : mb_substr($this->description, 0, 100) . '...',
            'amountSend' => $this->amountSend,
            'photo' => $this->media->file_url ?? '',
        ];
    }
}
