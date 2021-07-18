<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CastCrewRequest extends DefaultFormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'firstName'=>'required',
            'lastName'=>'required'
        ];
    }
}
