<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignUpRequest extends DefaultFormRequest
{

    public function rules()
    {
        return [
            "name" => "required",
            "password" => "required",
            "email" => "required|unique:customers,email"
        ];
    }
}
