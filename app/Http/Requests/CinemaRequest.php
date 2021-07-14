<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CinemaRequest extends DefaultFormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|unique:cinemas,name,'.$this->id,
            'status' => 'required',
            // , .$this.id == except this data that have the same id.
            'location' => 'required|unique:cinemas,location,'.$this->id
        ];
    }
}
