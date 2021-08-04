<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductAttributeValueCreateRequest extends DefaultFormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "attributeValues" => "required|array",
            "productAttributeId" => "required"
        ];
    }
}
