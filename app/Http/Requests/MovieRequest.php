<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MovieRequest extends FormRequest
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
            'ratedId' => 'required',
            'runningTime' => 'required',
            'status' => 'required',
            'releasedDate' => 'required',
            'movieCast' => 'required|array',
            'movieDirector' => 'required|array',
            'movieGenre' => 'required|array',
        ];
    }
}
