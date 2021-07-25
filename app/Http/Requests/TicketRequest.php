<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TicketRequest extends DefaultFormRequest
{

    public function rules()
    {
        return [
            'price' => "required|regex:/^\d{1,13}(\.\d{1,4})?$/|min:1",
            'seatId' => 'required',
            'screeningId' => 'required'
        ];
    }
}
