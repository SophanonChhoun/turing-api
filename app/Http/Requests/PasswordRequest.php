<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PasswordRequest extends DefaultFormRequest
{

    public function rules()
    {
        return [
            "password" => "required",
            "oldPassword" => "required"
        ];
    }
}
