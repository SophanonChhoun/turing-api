<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserBuyTicketRequest extends DefaultFormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'screeningId' => 'required',
            'seats' => 'required|array',
            'movieName' => 'required',
            'cinemaName' => 'required',
            'theatreName' => 'required',
            'paymentId' => 'required'
        ];
    }
}
