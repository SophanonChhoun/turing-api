<?php

namespace App\Http\Controllers;

use App\Core\MediaLib;
use App\Http\Requests\SeatRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Requests\TheaterRequest;
use App\Http\Resources\ListResource;
use App\Http\Resources\TheaterResource;
use App\Models\Seat;
use App\Models\Theater;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
//            $cast = MovieCast::store($movie->id, $request['movieCasts']);
            $data = Theater::create($request->all());
            $name = $data->name;
            //create seat in theater
            $row_theater = $data->row;
            $col_theater = $data->col;
            $alphabet = array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                'AA','BB','CC','DD','EE','FF','GG','HH','II','JJ','KK','LL','MM','NN','OO','PP','QQ','RR','SS','TT','UU','VV','WW','XX','YY','ZZ',);
            for($col=1;$col<=$col_theater;$col++){
                for($row=1;$row<=$row_theater;$row++){
                    $alphabet_index=$col-1;
                    $seat_name= "$row"."$alphabet[$alphabet_index]";
                    $seat_data [] =[
                        "name"=>$seat_name,
                        "row"=>$row,
                        "col"=>$col,
                        "theaterId"=>$data->id,
                        "seatTypeId"=>1,
                    ];
                }
            }
            $SeatData = Seat::insert($seat_data);

            if(!$SeatData)
            {
                DB::rollback();
                return $this->fail('Seat not insert');
            }
            if(!$data)
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
//            return $data;
            return $this->success(TheaterResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $Theater = Theater::with("media","cinema","seat")->find($id);
            if(!$Theater){
                return $this->fail("Theater ID:$id not found");
            }
//            return $this->success([
//                "id" => $Theater->id,
//                "name" => $Theater->name,
//                "row" => $Theater->row,
//                "col" => $Theater->col,
//                "status" => $Theater->status,
//                "cinemaId" => $Theater->cinemaId,
//                "image" => $Theater->media->file_url ?? '',
//                "seatId"=>$Theater->seat->id,
//            ]);
            return $Theater;
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
