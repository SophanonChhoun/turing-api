<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
// }
class Promotion extends Model
{
    use HasFactory;

    protected $fillable = [

        'title',
        'coupon',
        'percentage',
        'bill',
        'conditionTotal',
        'hasProducts',
        'hasScreenings',
        'status'
    ];


    public function promotionContent(){
        return $this->hasMany(promotionContent::class,"promotionId");
    }
    public function promotionProduct(){
        return $this->hasMany(PromotionProduct::class,"promotionId");
    }
    public function promotionScreening(){
        return $this->hasMany(PromotionScreening::class,"promotionId");
    }
}
