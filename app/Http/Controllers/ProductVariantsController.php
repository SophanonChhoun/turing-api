<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductVariantRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\ProductVariantResource;
use App\Models\ProductVariants;
use Illuminate\Http\Request;
use Exception;

class ProductVariantsController extends Controller
{
    public function store(ProductVariantRequest $request)
    {
        try {
            $data = ProductVariants::create($request->all());
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
               "productAttributeValueId" => $productVariant->productAttributeValueId
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
}
