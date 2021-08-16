<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductAttributeCreateRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => 'required|unique:product_attributes,name,'.$this->id,
            "attributeValues" => "required|array",
        ];
    }
}
