<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ScreeningRequest extends DefaultFormRequest
{


    public function rules()
    {
        return [
            'movieId' => 'required',
            'price' => "required|regex:/^\d+(\.\d{1,2})?$/|min:1",
            'date' =>'required',
            'start_time' => 'required',
            'theaterId' => 'required',
        ];
    }
}
