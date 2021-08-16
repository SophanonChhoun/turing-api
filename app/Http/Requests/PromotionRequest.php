<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
// public function up()
// {
//     Schema::create('promotions', function (Blueprint $table) {
//         $table->id();
//         $table->string('title');
//         $table->string('coupon');
//         $table->decimal('percentage')->nullable();
//         $table->decimal('bill')->nullable();
//         $table->decimal('conditionTotal')->default(0);
//         $table->boolean('hasProducts')->default(false);
//         $table->boolean('hasScreenings')->default(false);
//         $table->boolean('status')->default(false);
//         $table->timestamps();
//     });
// }

class PromotionRequest extends DefaultFormRequest
{
    public function rules()
    {
        return [
            'title' => 'required',
            "coupon" => "required|unique:promotion,coupon".$this->id,
            "percentage" => "",
            "bill" => "",
            "conditionTotal" => "",
            "status" => "required",
            "products"=> "required|array",
            "screenings"=>"required|array",
            "promotion_contents"=>"required|array"
        ];
    }
}
