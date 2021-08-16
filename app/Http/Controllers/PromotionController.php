<?php

namespace App\Http\Controllers;

use App\Http\Resources\PromotionResource;
use App\Models\Promotion;
use App\Models\PromotionContent;
use Illuminate\Http\Request;
use Carbon\Exceptions\Exception;

class PromotionController extends Controller
{
    public function index(){
        try {
            $promotion = Promotion::with("PromotionContent")->latest()->get();
            return $this->success(PromotionResource::collection($promotion));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function store(){

    }
}
