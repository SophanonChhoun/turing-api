<?php

namespace App\Http\Controllers;

use App\Core\MediaLib;
use App\Http\Requests\ProductCreateRequest;
use App\Http\Requests\ProductRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\ListResource;
use App\Http\Resources\ProductCustomerResource;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Models\ProductVariantHasAttributeValue;
use App\Models\ProductVariants;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Exception;
use DB;

class ProductController extends Controller
{
    public function index()
    {
        try {
            $data = Product::with("media", "category")->latest()->get();
            return $this->success(ProductResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function store(ProductCreateRequest $request)
    {
        DB::beginTransaction();
        try {
            if (isset($request['image']) && !empty($request['image']))
            {
                $request['mediaId'] = MediaLib::generateImageBase64($request['image']);
            }else{
                return $this->fail("", [
                    'Image field is required'
                ], 'InvalidRequestError', 412);
            }
            $data = Product::create($request->all());
            if(!$data)
            {
                DB::rollback();
                return $this->fail("Something went wrong with product");
            }
            foreach ($request['variants'] as $key => $productVariant)
            {
                $variantExist = ProductVariants::where("code", $productVariant['code'])->get()->first();
                if ($variantExist)
                {
                    DB::rollBack();
                    return $this->fail("", [
                        "Product variant code " . $productVariant['code'] . " already exist."
                    ], 'InvalidRequestError', 412);
                }
                $productVariant['productId'] = $data->id;
                $variant = ProductVariants::create($productVariant);
                $productVariantAttribute = ProductVariantHasAttributeValue::store($variant->id, $productVariant['productAttributeValueIds']);
                if (!$productVariantAttribute)
                {
                    DB::rollBack();
                    return $this->fail("Something went wrong with product variant attribute value.");
                }
                if (!$variant)
                {
                    DB::rollBack();
                    return $this->fail("Something went wrong with create product variant.");
                }
            }
            DB::commit();
            return $this->success([
                "message" => "Product Created."
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $data = Product::with("media")->findOrFail($id);
            return $this->success([
                "id" => $data->id,
                "name" => $data->name,
                "status" => $data->status,
                "categoryId" => $data->categoryId,
                "photo" => $data->media->file_url ?? ''
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function update($id, ProductRequest $request)
    {
        DB::beginTransaction();
        try {
            $product = Product::findOrFail($id);
            if (isset($request['image']))
            {
                $request['mediaId'] = MediaLib::generateImageBase64($request['image']);
            }
            $product = $product->update($request->all());
            if(!$product)
            {
                DB::rollback();
                return $this->fail("Something went wrong.");
            }
            DB::commit();
            return $this->success([
                "message" => "Product updated."
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function updateStatus($id, StatusRequest $request)
    {
        try {
            Product::findOrFail($id)->update([
                "status" => $request->status
            ]);
            return $this->success([
                "message" => "Product status updated"
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            $data = Product::findOrFail($id);
            MediaLib::deleteImage($data->mediaId);
            $data->delete();
            return $this->success([
                "message" => "Product deleted."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function listAll()
    {
        try {
            $data = Product::where("status", 1)->get();

            return $this->success(ListResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function productActive()
    {
        try {
            $data = Product::with('productVariant.productAttributeValues.productAttribute', 'media', 'category')->where("status", true)->latest()->get();
            return $this->success(ProductCustomerResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
