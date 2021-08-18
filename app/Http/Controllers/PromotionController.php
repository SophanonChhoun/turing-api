<?php

namespace App\Http\Controllers;

use App\Http\Requests\PromotionRequest;
use App\Http\Resources\PromotionProductResource;
use App\Http\Resources\PromotionScreeningResource;
use App\Models\Promotion;
use App\Models\PromotionContent;
use App\Models\PromotionProduct;
use App\Models\PromotionScreening;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB;

class PromotionController extends Controller
{
    public function store(PromotionRequest $request)
    {
        DB::beginTransaction();
        try {
            $data = Promotion::create($request->all());
            $contents = PromotionContent::store($data->id, $request['contents']);
            $products = PromotionProduct::store($data->id, $request['products']);
            $screenings = PromotionScreening::store($data->id, $request['screenings']);
            if (!$data)
            {
                DB::rollBack();
                return $this->fail("There is something wrong with insert promotion");
            }
            if (!$contents)
            {
                DB::rollBack();
                return $this->fail("There is something wrong with insert content");
            }
            if (!$products)
            {
                DB::rollBack();
                return $this->fail("There is something wrong with insert products");
            }
            if (!$screenings)
            {
                DB::rollBack();
                return $this->fail("There is something wrong with insert screenings");
            }
            DB::commit();
            return $this->success([
                'message' => "Promotion created successfully"
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function listPromotionProducts()
    {
        try {
            $data = Promotion::with('productIds')->where("hasProducts", true)->where("status", true)->get();
            return $this->success(PromotionProductResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function listPromotionScreenings($id)
    {
        try {
            $promotions = Promotion::where("hasProducts", true)->where("status", true)->get();
            $promotions = $promotions->filter(function($promotion) use($id) {
               if ($promotion->hasScreenings)
               {
                   $allScreenings = PromotionScreening::where("promotionId", $promotion->id)->get()->first();
                   if (!$allScreenings)
                   {
                       return $promotion;
                   }
                   $screenings = PromotionScreening::where("screeningId", $id)->get()->first();
                   if ($screenings)
                   {
                       return $screenings;
                   }
               }
            });
            return $this->success($promotions);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
