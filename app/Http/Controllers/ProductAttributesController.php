<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductAttributeRequest;
use App\Http\Resources\ProductAttributeResource;
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
        $data = ProductAttributes::all();
        return $this->success(ProductAttributeResource::collection($data));

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




}
