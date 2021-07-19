<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductSaleRequest;
use App\Models\ProductSale;
use App\Models\ProductSelling;
use Illuminate\Http\Request;
use DB;
use Exception;

class ProductSaleController extends Controller
{
    public function store(ProductSaleRequest $request)
    {
        DB::beginTransaction();
        try {
            $data = ProductSale::create($request->all());
            $productSelling = ProductSelling::store($data->id, $request['products']);
            if (!$data || !$productSelling)
            {
                DB::rollback();
                return $this->fail("Something went wrong");
            }
            DB::commit();
            return $this->success([
               "Product sale created successful"
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }
}
