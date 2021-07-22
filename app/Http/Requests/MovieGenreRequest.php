<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MovieGenreRequest extends DefaultFormRequest
{
    public function rules()
    {
        return [
            "name" => "required|unique:movie_genres,name,".$this->id,
            "description"=> "required",
        ];
    }
}
