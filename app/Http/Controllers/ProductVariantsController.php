<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductVariantCreateRequest;
use App\Http\Requests\ProductVariantRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\ListResource;
use App\Http\Resources\ProductVariantListResource;
use App\Http\Resources\ProductVariantResource;
use App\Models\ProductVariants;
use Illuminate\Http\Request;
use Exception;

class ProductVariantsController extends Controller
{
    public function store(ProductVariantCreateRequest $request)
    {
        try {
            $data = ProductVariants::store($request['productId'], $request['productVariants']);
            if (!$data)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
                "message" => "Product variant created."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function index()
    {
        try {
            $data = ProductVariants::with("product", "productAttributeValue")->latest()->get();
            return $this->success(ProductVariantResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $productVariant = ProductVariants::findOrFail($id);
            return $this->success([
               "id" => $productVariant->id,
               "price" => $productVariant->price,
               "status" => $productVariant->status,
               "productId" => $productVariant->productId,
               "productAttributeValueId" => $productVariant->productAttributeValueId,
               "size" => $productVariant->size
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function update($id, ProductVariantRequest $request)
    {
        try {
            $data = ProductVariants::find($id)->update($request->all());
            if (!$data)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
                "message" => "Product variant updated."
            ]);
        }catch (Exception $exception){
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
            $data = ProductVariants::where("status", true)->get();
            return $this->success(ProductVariantListResource::collection($data));
        }catch (Exception $exception) {
            return $this->fail($exception->getMessage());
        }
    }
}
