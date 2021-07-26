<?php

namespace App\Http\Controllers;

use App\Models\Currency;
use Illuminate\Http\Request;
use Exception;

class CurrencyController extends Controller
{
    public function index()
    {
        try {
            $data = Currency::all();
            return $this->success($data);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function update($id, Request $request)
    {
        try {
            $data = Currency::findOrFail($id)->update($request->all());
            if (!$data)
            {
                return $this->fail("There is something went wrong");
            }

            return $this->success([
               "message" => "Currency updated."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function show()
    {
        try {
            return $this->success(Currency::get()->first());
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
