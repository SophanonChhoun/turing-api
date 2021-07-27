<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends DefaultFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
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
                'firstName' => 'required',
                'lastName' => 'required',
                'status' => 'required',
                'phoneNumber' => 'required',
                'cinemas' => 'required|array',
                'roles' => 'required|array'
        ];
    }
}
