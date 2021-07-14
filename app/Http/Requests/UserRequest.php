<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|unique:users,name,'.$this->id,
            'email' => 'required|unique:users,email,'.$this->id,
            'password' => 'required',
            'firstName' => 'required',
            'lastName' => 'required',
            'status' => 'required',
            'phoneNumber' => 'required',
            'cinemas' => 'required|array',
            'roles' => 'required|array'
        ];
    }
}
