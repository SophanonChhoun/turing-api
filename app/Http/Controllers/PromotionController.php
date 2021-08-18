<?php

namespace App\Http\Controllers;

<<<<<<< HEAD

use App\Http\Requests\PromotionRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\PromotionResource;
=======
use App\Http\Requests\PromotionRequest;
use App\Http\Resources\PromotionProductResource;
use App\Http\Resources\PromotionScreeningResource;
>>>>>>> 4af4d557f799ba2c2f305be26b688eb37c3a2dcf
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
            $promotion = Promotion::with("promotionContent")->latest()->get();
// return $this->success(PromotionResource::collection($promotion));
            return $this->success([
                "id" => $promotion->id,
                "title" => $promotion->title,
                "coupon" => $promotion->coupon,
                "percentage" => $promotion->percentage,
                "conditionsTotal" => $promotion->conditionsTotal,
                "hasScreenings" => $promotion->hasScreenings,
                "hasProducts" => $promotion->hasProducts,
                "contents" => $promotion->promotionContent,
            ]);
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
            $promotion = Promotion::with("PromotionContent","PromotionProduct","PromotionScreening")->findOrFail($id);
            if(!$promotion){
                return $this->fail("ID:$id not found");
            }
            return $this->success(PromotionResource::collection($promotion));

    public function listPromotionProducts()
    {
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
            PromotionContent::store($id,$request->promotionContent);
            PromotionScreening::store($id,$request->promotionScreening);
            PromotionProduct::store($id,$request->promotionProduct);
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

    public function listPromotionScreenings($id)
    {
        try {
            $promotionScreening = PromotionScreening::where("screeningId", $id)->get();
            $promotionIds = $promotionScreening->pluck("promotionId");
            $promotions = Promotion::whereIn("id", $promotionIds)->where("status", true)->get();
            return $this->success($promotions);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
