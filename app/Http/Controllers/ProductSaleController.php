<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductSaleRequest;
use App\Http\Resources\ProductSaleResource;
use App\Http\Resources\ProductSellingResource;
use App\Models\ProductSale;
use App\Models\ProductSelling;
use Carbon\Carbon;
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

    public function index()
    {
        try {
            $sales = ProductSale::with("user", "cinema")->latest()->get();
            return $this->success(ProductSaleResource::collection($sales));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $sales = ProductSale::with("user", "cinema", "products")->findOrFail($id);
            return $this->success([
                "userName" => $sales->user->name ?? '',
                "cinema" => $sales->cinema->name ?? '',
                "total" => $sales->total,
                "products" => ProductSellingResource::collection($sales->products),
                "createdAt" => $sales->created_at->format('Y-m-d')
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
