<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserProfileRequest extends DefaultFormRequest
{
    public function rules()
    {
        return [
            'name' => 'required|unique:users,name,'.auth()->user()->id,
            'email' => 'required|unique:users,email,'.auth()->user()->id,
            'firstName' => 'required',
            'lastName' => 'required',
            'phoneNumber' => 'required',
        ];
    }
}
