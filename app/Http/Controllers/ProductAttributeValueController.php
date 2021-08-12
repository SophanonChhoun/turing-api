<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductAttributeValueCreateRequest;
use App\Http\Requests\ProductAttributeValueRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\ProductAttributeValueResource;
use App\Http\Resources\ListResource;
use App\Models\ProductAttributeValue;
use App\Models\ProductVariantHasAttributeValue;
use Carbon\Carbon;
use Exception;
use DB;
use Illuminate\Http\Request;

class ProductAttributeValueController extends Controller
{
    public function store(ProductAttributeValueCreateRequest $request)
    {
        try {
            foreach ($request['attributeValues'] as $key => $product){
                $valueExist = ProductAttributeValue::where("name", $product['name'])->where("productAttributeId", $request['productAttributeId'])->get()->first();
                if ($valueExist)
                {
                    DB::rollBack();
                    return $this->fail("", [
                        "Product attribute value name " . $product['name'] . " already exist."
                    ], 'InvalidRequestError', 412);
                }
                $product['productAttributeId'] = $request['productAttributeId'];
                $data = ProductAttributeValue::create($product);
                if(!$data)
                {
                    return $this->fail("Something went wrong");
                }
            }
            return $this->success([
               "message" => "Product Attribute created."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function index()
    {
        try {
            $data = ProductAttributeValue::with("productAttribute")->latest()->get();
            return $this->success(ProductAttributeValueResource::collection($data));
        }catch (Exception $exception){
            return $this->success($exception->getMessage());
        }
    }

    public function restoreData(Request $request)
    {
        try {
            $data = ProductAttributeValue::withTrashed();
            $attribute = ProductVariantHasAttributeValue::withTrashed();
            if (isset($request['date']))
            {
                $data = $data->where("deleted_at", ">=", Carbon::parse($request['date'])->toDateString());
                $attribute = $attribute->where("deleted_at", ">=", Carbon::parse($request['date'])->toDateString());
            }
            $data->restore();
            $attribute->restore();
            $data = ProductAttributeValue::with("productAttribute")->latest()->get();
            return $this->success(ProductAttributeValueResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $productAttributeValue = ProductAttributeValue::find($id);
            return $this->success([
                "id" => $productAttributeValue->id,
                "name" => $productAttributeValue->name,
                "status" => $productAttributeValue->status,
                "productAttributeId" => $productAttributeValue->productAttributeId
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function update($id, ProductAttributeValueRequest $request)
    {
        try {
            $data = ProductAttributeValue::find($id)->update($request->all());
            if(!$data)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
                "message" => "Product attribute value updated"
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function updateStatus($id, StatusRequest $request)
    {
        try {
            $data = ProductAttributeValue::find($id)->update([
                "status" => $request['status']
            ]);
            if (!$data)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
                "message" => "Product attribute value status updated."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function destroy($id)
    {
        DB::beginTransaction();
        try {
            $data = ProductAttributeValue::find($id)->delete();
            ProductVariantHasAttributeValue::where("attributeValueId", $id)->delete();
            if(!$data)
            {
                DB::rollBack();
                return $this->fail("Something went wrong");
            }
            DB::commit();
            return $this->success([
                "message" => "Product Attribute Value deleted"
            ]);
        }catch (Exception $exception){
            DB::rollBack();
            return $this->fail($exception->getMessage());
        }
    }

    public function listAll()
    {
        try {
            $data = ProductAttributeValue::where("status", 1)->get();
            return $this->success(ListResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
