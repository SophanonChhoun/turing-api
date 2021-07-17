<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MovieGenreRequest extends FormRequest
{
    public function rules()
    {
        return [
            "name" => "required|unique:movie_genres,name",
            "description"=> "required",
            "status"=> "required",
        ];
    }
}
