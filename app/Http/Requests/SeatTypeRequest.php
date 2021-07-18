<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SeatTypeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
//        $table->string("name");
//            $table->double("priceFactor");
//            $table->bigInteger("cinemaId");
//            $table->boolean("status");
    {
        return [
            "name" => "required",
            "priceFactor"=>"required",
            "cinemaId"=>"required",
            "status"=>"required",
        ];
    }
}
