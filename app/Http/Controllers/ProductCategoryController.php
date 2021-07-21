<?php

namespace App\Http\Controllers;

use App\Core\MediaLib;
use App\Http\Requests\ProductCategoryRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\ListResource;
use App\Http\Resources\ProductCategoryResource;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use DB;
use Exception;

class ProductCategoryController extends Controller
{
    public function index()
    {
        try {
            $data = ProductCategory::with("media")->latest()->get();
            return $this->success(ProductCategoryResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function store(ProductCategoryRequest $request)
    {
        DB::beginTransaction();
        try {
            if (isset($request['image'])  && !empty($request['image']))
            {
                $request['mediaId'] = MediaLib::generateImageBase64($request['image']);
            }else{
                return $this->fail("", [
                    'Image field is required'
                ], 'InvalidRequestError', 412);
            }
            $data = ProductCategory::create($request->all());
            if(!$data)
            {
                DB::rollback();
                return $this->fail("Something went wrong");
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
            $data = ProductCategory::with("media")->findOrFail($id);
            return $this->success([
                "id" => $data->id,
                "name" => $data->name,
                "description" => $data->description,
                "photo" => $data->media->file_url ?? '',
                "status" => $data->status
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function update($id, ProductCategoryRequest $request)
    {
        DB::beginTransaction();
        try {
            $category = ProductCategory::findOrFail($id);
            if (isset($request['image']))
            {
                $request['mediaId'] = MediaLib::generateImageBase64($request['image']);
            }
            $category = $category->update($request->all());
            if(!$category)
            {
                DB::rollback();
                return $this->fail("Something went wrong.");
            }
            DB::commit();
            return $this->success([
                "message" => "Product category updated."
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function updateStatus($id, StatusRequest $request)
    {
        try {
            ProductCategory::findOrFail($id)->update([
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
            ProductCategory::findOrFail($id)->delete();
            return $this->success([
               "message" => "Product category deleted."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function listAll()
    {
        try {
            $categories = ProductCategory::where("status", 1)->get();
            return $this->success(ListResource::collection($categories));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
