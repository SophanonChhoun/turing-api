<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ScreeningCreateRequest extends DefaultFormRequest
{
    public function rules()
    {
        return [
            'movieId' => 'required',
            'screenings' => 'required|array'
        ];
    }
}
