<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MovieRatingRequest extends DefaultFormRequest
{
    public function rules()
    {
        return [
            'title' => 'required|unique:movie_ratings,title,'.$this->id,
            "description"=>"required",
        ];
    }
}
