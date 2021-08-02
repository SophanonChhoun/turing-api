<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TheaterUpdateRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "name" => "required",
            "col" => "required|max:50|numeric",
            "row" => "required|max:50|numeric",
            "status" => "required",
            "cinemaId" => "required",
            "seats" => "required"
        ];
    }
}
