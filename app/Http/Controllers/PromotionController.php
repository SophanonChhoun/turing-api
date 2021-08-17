<?php

namespace App\Http\Controllers;

use App\Models\Promotion;
use App\Models\PromotionContent;
use App\Models\PromotionProduct;
use App\Models\PromotionScreening;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB;

class PromotionController extends Controller
{
    public function store(Request $request)
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
}
