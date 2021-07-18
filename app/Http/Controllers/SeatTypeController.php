<?php

namespace App\Http\Controllers;

use App\Http\Requests\SeatTypeRequest;
use App\Http\Resources\SeatTypeResource;
use App\Models\SeatType;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SeatTypeController extends Controller
{
    public function store(SeatTypeRequest $request){
        try{
            DB::beginTransaction();

            $data = Seattype::create($request->all());
            $id=$data->id;
            if(!$data)
            {
                DB::rollback();
                return $this->fail('There is something wrong. data store not success');
            }
            DB::commit();
            return $this->success([
                'message' => "Seat type ID:$id Created successfully"
            ]);

        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }
    public function index(){
        try{
            $data=Seattype::with("cinema")->latest()->get();
            if(!$data){
                return $this->fail("data not found or data not exists");
            }
            return $this->success(SeatTypeResource::collection($data));

        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }
}
