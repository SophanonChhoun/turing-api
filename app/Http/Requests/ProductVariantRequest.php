<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductVariantRequest extends DefaultFormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "price" => "required",
            "productId" => "required",
            "productAttributeValueIds" => "required|array",
            "code" => "required|unique:product_variants,code,".$this->id
        ];
    }
}
