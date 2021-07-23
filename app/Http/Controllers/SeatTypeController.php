<?php

namespace App\Http\Controllers;

use App\Http\Requests\SeatTypeRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\ListResource;
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

    public function update(SeatTypeRequest $request,$id){
        DB::beginTransaction();
        try {
            $seattype= Seattype::find($id);
            if (!$seattype)
            {
                return $this->fail([
                    "message" => "seattype not found"
                ], 404);
            }
            $seattype= $seattype->update($request->all());
            if(!$seattype)
            {
                DB::rollback();
                return $this->fail("There is something wrong");
            }
            DB::commit();
            return $this->success([
                "message" => "seattype '.$id.'updated"
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }
    public function updateStatus(StatusRequest $request,$id){
        try {
            $Seattype = Seattype::find($id);
            if(!$Seattype)
            {
                return $this->fail("Seattype not exist.");
            }
            $Seattype = $Seattype->update([
                "status" => $request->status
            ]);
            if(!$Seattype)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
                "message" => "Seattype status updated."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
    public function destroy($id)
    {

        try {
            $seattype = Seattype::find($id);
            if(!$seattype)
            {
                return $this->fail("seattype not exist.");
            }
            $seattype = $seattype->delete();
            if(!$seattype)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
                'message' => 'seattype'.$id.'deleted'
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function listAll()
    {
        try {
            $data = SeatType::where("status", true)->get();
            return $this->success(ListResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
