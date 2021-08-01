<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TicketRequest extends DefaultFormRequest
{

    public function rules()
    {
        return [
            'screeningId' => 'required',
            'seats' => 'required|array',
            'movieName' => 'required',
            'cinemaName' => 'required',
            'theaterName' => 'required'
        ];
    }
}
