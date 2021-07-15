<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CustomerRequest extends DefaultFormRequest
{
    public function rules()
    {
        return [
            "name" => "required",
            'email' => 'required|unique:customers,email,'.auth()->user()->id,
        ];
    }
}
