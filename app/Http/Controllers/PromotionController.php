<?php

namespace App\Http\Controllers;

use App\Http\Requests\PromotionRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\PromotionContentResource;
use App\Http\Resources\PromotionResource;
use App\Http\Resources\PromotionProductResource;
use App\Http\Resources\PromotionScreeningResource;
use App\Models\Media;
use App\Models\Promotion;
use App\Models\PromotionContent;
use App\Models\PromotionProduct;
use App\Models\PromotionScreening;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB;

class PromotionController extends Controller
{
    public function index(){
        try {
            $promotion = Promotion::with("contents")->latest()->get();
            return $this->success(PromotionResource::collection($promotion));

        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
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

    public function show ($id){
        try {
            $promotion = Promotion::with("contents", "products", "screenings","productIds","screeningIds")->findOrFail($id);
            if (!$promotion) {
                return $this->fail("ID:$id not found");
            }
            return $this->success([
                'id' => $promotion->id,
                'title' => $promotion->title,
                'coupon' => $promotion->coupon,
                'percentage' => $promotion->percentage,
                'bill' => $promotion->bill,
                'conditionTotal' => $promotion->conditionaTotal,
                'hasProducts' => $promotion->hasProducts,
                'hasScreenings' => $promotion->hasScreenings,
                'status' => $promotion->status,
                'contents' => PromotionContentResource::collection($promotion->contents),
                'products' => $promotion->products,
                'screenings' => $promotion->screenings,
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function listPromotionProducts(){
        try {
            $data = Promotion::with('productIds')->where("hasProducts", true)->where("status", true)->get();
            return $this->success(PromotionProductResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function updateStatus($id,StatusRequest $request){
        try{
            Promotion::find($id)->update([
                "status" => $request->status
            ]);

            return $this->success([
                "message" => "Promotion status ID:$id updated"
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
    public function update($id,PromotionRequest $request){
        DB::beginTransaction();
        try{
            Promotion::findOrFail($id)->update($request->all());
            PromotionContent::store($id,$request->contents);
            PromotionScreening::store($id,$request->screenings);
            PromotionProduct::store($id,$request->products);
            DB::commit();
            return $this->success(["message"=>"Promotion ID:$id updated"]);
        }catch (Exception $exception){
            DB::rollBack();
            return $this->fail($exception->getMessage());
        }
    }
    public function destroy ($id){
        DB::beginTransaction();
        try{
            $promotion = Promotion::find($id);
            PromotionContent::where("promotionId",$id)->delete();
            if(!$promotion){
                DB::rollBack();
                return $this->fail("This promotion ID:$id not found");
            }
            $promotion->delete();
            DB::commit();
            return $this->success(["messasge"=>"promotion ID: $id have been deleted"]);
        }catch (Exception $exception){
            DB::rollBack();
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
