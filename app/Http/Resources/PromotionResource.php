<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

// Schema::create('promotion_contents', function (Blueprint $table) {
//     $table->id();
//     $table->bigInteger('promotionId');
//     $table->text('description')->nullable();
//     $table->bigInteger('mediaId')->nullable();
//     $table->timestamps();
// });

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
class PromotionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "title" => $this->title,
            "coupon" => $this->coupon,
            "bill" => $this->bill,
            "conditionTotal"=> $this->conditionTotal,
            "status" => $this->status,
            "hasProducts" => $this->hasProducts,
            "hasScreenings" => $this->hasScreenings,
        ];
    }
}
