<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MovieRequest extends DefaultFormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required',
            'trailerUrl' => 'required',
            'synopsis' => 'required',
            'poster' => 'required',
            'backdrop' => 'required',
            'ratedId' => 'required',
            'runningTime' => 'required',
            'releasedDate' => 'required',
            'movieCasts' => 'required|array',
            'movieDirectors' => 'required|array',
            'movieGenres' => 'required|array',
        ];
    }
}
