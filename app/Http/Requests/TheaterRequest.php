<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class TheaterRequest extends DefaultFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            "row"=>"required|max:50|numeric",
            "col"=>"required|max:50|numeric",
            "status"=>"required",
            "cinemaId"=>"required",
            "seats"=>"array",
        ];
    }
}
