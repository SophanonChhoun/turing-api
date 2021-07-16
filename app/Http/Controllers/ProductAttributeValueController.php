<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductAttributeValueRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\ProductAttributeValueResource;
use App\Http\Resources\ListResource;
use App\Models\ProductAttributeValue;
use Database\Seeders\ProductAttribute;
use Illuminate\Http\Request;
use Exception;

class ProductAttributeValueController extends Controller
{
    public function store(ProductAttributeValueRequest $request)
    {
        try {
            $data = ProductAttributeValue::create($request->all());
            if(!$data)
            {
                return $this->fail("Something went wrong");
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
        try {
            $data = ProductAttributeValue::find($id)->delete();
            if(!$data)
            {
                return $this->fail("Something went wrong");
            }

            return $this->success([
                "message" => "Product Attribute Value deleted"
            ]);
        }catch (Exception $exception){
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
