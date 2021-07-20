<?php

namespace App\Http\Controllers;

use App\Core\MediaLib;
use App\Http\Requests\SeatRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Requests\TheaterRequest;
use App\Http\Resources\ListResource;
use App\Http\Resources\SeatResource;
use App\Http\Resources\TheaterResource;
use App\Models\Seat;
use App\Models\Theater;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Expr\Array_;
use Ramsey\Uuid\Type\Integer;

class TheaterController extends Controller
{
    public function store(TheaterRequest $request){
        DB::beginTransaction();
        try {
            if (isset($request['image']))
            {
                $request['mediaId'] = MediaLib::generateImageBase64($request['image']);
            }else{
                return $this->fail("", [
                    'Image field is required'
                ], "InvalidRequestError", 412);
            }
            $data = Theater::create($request->all());
            $name = $data->name;
            $seats = Seat::store($data->id, $request['seats']);
            if(!$data || !$seats)
            {
                DB::rollback();
                return $this->fail('There is something wrong.');
            }
            DB::commit();
            return $this->success([
                'message' => "Theater with name:$name created"
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function index(){
        try {
            $data = Theater::with("media","cinema","seat")->latest()->get();
            return $this->success(TheaterResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $Theater = Theater::with("media","cinema")->find($id);
            if(!$Theater){
                return $this->fail("Theater ID:$id not found");
            }
            for ($i=0; $i < $Theater->row; $i++) {
                for ($j=0; $j< $Theater->col; $j++) {
                    $grid[$i][$j] = null;
                }
            }
            $seats = SeatResource::collection(Seat::with("seatType")->where("theaterId", $id)->where("status", true)->get());
            foreach ($seats as $key => $seat) {
                $grid[$seat->row][$seat->col] = [
                    "id" => $seat->id,
                    "name" => $seat->name,
                    "seatType" => $seat->seatType
                ];
            }

            return $this->success([
                "id" => $Theater->id,
                "name" => $Theater->name,
                "row" => $Theater->row,
                "col" => $Theater->col,
                "status" => $Theater->status,
                "cinemaId" => $Theater->cinemaId,
                "image" => $Theater->media->file_url ?? '',
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
    public function update($id, TheaterRequest $request)
    {
        DB::beginTransaction();
        try {
            $Theater = Theater::find($id);
            if (!$Theater)
            {
                return $this->fail([
                    "message" => "Theater ID: $id not found"
                ], 404);
            }
            if (isset($request['image']))
            {
                $request['mediaId'] = MediaLib::generateImageBase64($request['image']);
            }
            $Theater = $Theater->update($request->all());
            if(!$Theater)
            {
                DB::rollback();
                return $this->fail("There is something wrong");
            }
            DB::commit();
            return $this->success([
                "message" => "Theater ID:$id updated"
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }
    public function destroy($id)
    {
        try {
            $Theater = Theater::find($id);
            $name=$Theater->name;
            if(!$Theater)
            {
                return $this->fail("Theater not exist.", [], "Not Found", 404);
            }
            $Theater = $Theater->delete();

            if(!$Theater)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
                'message' => "Theater ID:$id Name: $name deleted"
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function listAll()
    {
        try {
            $data = Theater::where("status", 1)->get();
            return $this->success(ListResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
