<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductSaleRequest extends DefaultFormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'userId' => 'required',
            'cinemaId' => 'required',
            'total' => 'required',
            'products' => 'required|array',
            'promotionId' => 'required',
            'totalDiscount' => 'required'
        ];
    }
}
