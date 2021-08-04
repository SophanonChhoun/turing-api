<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductVariantCreateRequest;
use App\Http\Requests\ProductVariantRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\ListResource;
use App\Http\Resources\ProductVariantListResource;
use App\Http\Resources\ProductVariantResource;
use App\Models\ProductVariantHasAttributeValue;
use App\Models\ProductVariants;
use Illuminate\Http\Request;
use Exception;
use DB;

class ProductVariantsController extends Controller
{
    public function store(ProductVariantCreateRequest $request)
    {
        DB::beginTransaction();
        try {
            foreach ($request['productVariants'] as $key => $productVariant)
            {
                $productVariant['productId'] = $request['productId'];
                $data = ProductVariants::create($productVariant);
                $productVariantAttribute = ProductVariantHasAttributeValue::store($data->id, $productVariant['productAttributeValueIds']);
                if (!$productVariantAttribute)
                {
                    DB::rollBack();
                    return $this->fail("Something went wrong with product variant attribute value.");
                }
                if (!$data)
                {
                    DB::rollBack();
                    return $this->fail("Something went wrong with create product variant.");
                }
            }
            DB::commit();
            return $this->success([
                "message" => "Product variant created."
            ]);
        }catch (Exception $exception){
            DB::rollBack();
            return $this->fail($exception->getMessage());
        }
    }

    public function index()
    {
        try {
            $data = ProductVariants::with("product", "productAttributeValues")->latest()->get();
            return $this->success(ProductVariantResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $productVariant = ProductVariants::with('hasAttributeValues')->findOrFail($id);
            return $this->success([
               "id" => $productVariant->id,
               "price" => $productVariant->price,
               "status" => $productVariant->status,
               "productId" => $productVariant->productId,
               "productAttributeValueIds" => $productVariant->hasAttributeValues->pluck('attributeValueId'),
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function update($id, ProductVariantRequest $request)
    {
        DB::beginTransaction();
        try {
            $data = ProductVariants::find($id)->update($request->all());
            $productVariantAttribute = ProductVariantHasAttributeValue::store($id, $request['productAttributeValueIds']);
            if (!$data | !$productVariantAttribute)
            {
                DB::rollBack();
                return $this->fail("Something went wrong");
            }
            DB::commit();
            return $this->success([
                "message" => "Product variant updated."
            ]);
        }catch (Exception $exception){
            DB::rollBack();
            return $this->fail($exception->getMessage());
        }
    }

    public function updateStatus($id, StatusRequest $request)
    {
        try {
            $data = ProductVariants::find($id)->update($request->all());
            if (!$data)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
                "message" => "Product variant status updated."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            $data = ProductVariants::findOrFail($id)->delete();
            if (!$data)
            {
                return $this->fail("something went wrong");
            }
            return $this->success([
               "message" => "Product variant deleted."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function listAll()
    {
        try {
            $data = ProductVariants::with('hasAttributeValues')->where("status", true)->get();
            return $this->success(ProductVariantListResource::collection($data));
        }catch (Exception $exception) {
            return $this->fail($exception->getMessage());
        }
    }
}
