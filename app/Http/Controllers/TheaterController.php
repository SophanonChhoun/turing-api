<?php

namespace App\Http\Controllers;

use App\Http\Requests\SeatRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Requests\TheaterRequest;
use App\Http\Requests\TheaterUpdateRequest;
use App\Http\Resources\ListResource;
use App\Http\Resources\SeatResource;
use App\Http\Resources\TheaterResource;
use App\Models\Screening;
use App\Models\Seat;
use App\Models\Theater;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class TheaterController extends Controller
{
    public function store(TheaterRequest $request){
        DB::beginTransaction();
        try {
            $data = Theater::create($request->all());
            $name = $data->name;
            $seats = Seat::store($data->id, $request['seats']);

            if(!$data)
            {
                DB::rollback();
                return $this->fail('There is something wrong when insert theater.');
            }

            if(!$seats)
            {
                DB::rollBack();
                return $this->fail("There is something wrong when insert seats.");
            }
            DB::commit();
            return $this->success([
                'message' => "Theater with name:$name created"
            ]);
        }catch (Exception $exception){
            DB::rollBack();
            return $this->fail($exception->getMessage());
        }
    }

    public function index(){
        try {
            $data = Theater::with("cinema","seat")->latest()->get();
            return $this->success(TheaterResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $Theater = Theater::with('cinema')->find($id);
            if (!$Theater) {
                return $this->fail("Theater ID:$id not found");
            }
            for ($i=0; $i < $Theater->row; $i++) {
                for ($j=0; $j < $Theater->col; $j++) {
                    $grid[$i][$j] = null;
                }
            }
            $seats = SeatResource::collection(Seat::with("seatType")->where("theaterId", $id)->get());
            foreach ($seats as $key => $seat) {
                $grid[$seat->row][$seat->col] = [
                    "id" => $seat->id,
                    "name" => $seat->name,
                    "seatType" => $seat->seatType,
                    "status" => $seat->status,
                ];
            }
            return $this->success([
                "id" => $Theater->id,
                "name" => $Theater->name,
                "row" => $Theater->row,
                "col" => $Theater->col,
                "status" => $Theater->status,
                "cinemaId" => $Theater->cinemaId,
                "cinema" => $Theater->cinema,
                "seats" => $grid
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function updateStatus($id, StatusRequest $request)
    {
        try {
            $Theater = Theater::find($id);
            if(!$Theater)
            {
                return $this->fail("Theater not exist.");
            }
            $Theater = $Theater->update([
                "status" => $request->status
            ]);
            if(!$Theater)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
                "message" => "Theater ID:$id status updated."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function update($id, TheaterUpdateRequest $request)
    {
        DB::beginTransaction();
        try {
            $data = Theater::findOrFail($id)->update($request->all());
            $seats = Seat::store($id, $request['seats']['create']);
            $updateSeats = Seat::updateSeat($id, $request['seats']['put']);
            $deleteSeats = Seat::whereIn("id", $request['seats']['delete'])->delete();
            if (!$data || !$seats || !$updateSeats)
            {
                DB::rollBack();
                if (!$data)
                {
                    return $this->fail("There is something wrong with update theatre");
                }
                if (!$seats)
                {
                    return $this->fail("There is something wrong with create seats");
                }
                if (!$updateSeats)
                {
                    return $this->fail("There is something wrong with update seats");
                }
                return $this->fail("There is something wrong");
            }
            DB::commit();
            return $this->success([
               "message" => "Theatre updated successfully"
            ]);
        }catch (Exception $exception){
            DB::rollBack();
            return $this->fail($exception->getMessage());
        }
    }

    public function destroy($id)
    {
        DB::beginTransaction();
        try {
            $Theater = Theater::find($id);
            if(!$Theater)
            {
                return $this->fail("Theater not exist.", [], "Not Found", 404);
            }
            if (Screening::where("theaterId", $id)->get()->first())
            {
                return $this->fail("Theater have screenings");
            }
            $Theater = $Theater->delete();
            if(!$Theater)
            {
                DB::rollBack();
                return $this->fail("Something went wrong with theater");
            }
            Seat::where('theaterId', $id)->delete();
            DB::commit();
            return $this->success([
                'message' => "Theater deleted"
            ]);
        }catch (Exception $exception){
            DB::rollBack();
            return $this->fail($exception->getMessage());
        }
    }

    public function listAll()
    {
        try {
            $data = Theater::where("status", true)->get();
            return $this->success(ListResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
