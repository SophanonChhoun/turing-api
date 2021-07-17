<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductAttributeRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\ProductAttributeResource;
use App\Http\Resources\ListResource;
use App\Models\ProductAttributes;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Exception;
class ProductAttributesController extends Controller
{

    public function store(ProductAttributeRequest $request ){
        DB::beginTransaction();
        try {
            $data = ProductAttributes::create($request->all());
            if(!$data)
            {
                DB::rollback();
                return $this->fail('There is something wrong. data store not success');
            }
            DB::commit();
            return $this->success([
                'message' => 'Product Attribute  Created successfully'
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }

    }

    public function index(){
        try{
            $data = ProductAttributes::all();
            return $this->success(ProductAttributeResource::collection($data));
        }
        catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }

    }

    public function update(ProductAttributeRequest $request, $id){
        DB::beginTransaction();
        try {
            $productattribute= ProductAttributes::find($id);
            if (!$productattribute)
            {
                return $this->fail([
                    "message" => "productattribute not found"
                ], 404);
            }
            $productattribute= $productattribute->update($request->all());
            if(!$productattribute)
            {
                DB::rollback();
                return $this->fail("There is something wrong");
            }
            DB::commit();
            return $this->success([
                "message" => "productattribute '.$id.'updated"
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function updateStatus($id, StatusRequest $request)
    {
        try {
            $ProductAttributes = ProductAttributes::find($id);
            if(!$ProductAttributes)
            {
                return $this->fail("ProductAttributes not exist.");
            }
            $ProductAttributes = $ProductAttributes->update([
                "status" => $request->status
            ]);
            if(!$ProductAttributes)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
                "message" => "ProductAttributes status updated."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function destroy($id)
    {

        try {
            $productattribute = ProductAttributes::find($id);
            if(!$productattribute)
            {
                return $this->fail("Productattribute not exist.");
            }
            $productattribute = $productattribute->delete();
            if(!$productattribute)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
                'message' => 'Productattribute'.$id.'deleted'
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function listAll()
    {
        try {
            $data = ProductAttributes::where("status", 1)->get();
            return $this->success(ListResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
