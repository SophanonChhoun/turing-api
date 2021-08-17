<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PromotionRequest extends DefaultFormRequest
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
            'coupon' => 'required',
            'conditionTotal' => 'required',
            'hasProducts' => 'required',
            'hasScreenings' => 'required',
            'contents' => 'required|array',
        ];
    }
}
