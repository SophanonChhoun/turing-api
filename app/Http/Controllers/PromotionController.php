<?php

namespace App\Http\Controllers;

use App\Http\Requests\PromotionRequest;
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

    public function store(PromotionRequest $request){
        DB::beginTransaction();
        try {
            $promotion = Promotion::create($request->all());
            PromotionContent::store($promotion->id, $request->promotion_contents);
            DB::commit();
            return $this->success([
                "message" => "Role created"
            ]);
        }catch (Exception $exception){
            DB::rollBack();
            return $this->fail($exception->getMessage());
        }
    }
}
