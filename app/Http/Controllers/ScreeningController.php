<?php

namespace App\Http\Controllers;

use App\Models\Screening;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StatusRequest;
use App\Http\Requests\ScreeningRequest;
use App\Http\Resources\ScreeningResource;

class ScreeningController extends Controller
{
    public function index()
    {
        try {
            $data = Screening::with("language","movie","theater")->latest()->get();
            return $this->success(ScreeningResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $data = Screening::find($id);
            if (!$data)
            {
                return $this->fail("data not found" ,[], "", 404);
            }
            return $this->success([
                "id" => $data->id,
                "movie_title" => $data->movie->title,
                "price" => $data->price,
                "theater" => $data->theater->name,
                "language_sub" => $data->language->sub,
                "language_dub" => $data->language->dub,
                "date" => $data->date,
                "start_time" => $data->start_time,
                "status" => $data->status,
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function update($id, ScreeningRequest $request)
    {
        DB::beginTransaction();
        try {
            $data = Screening::find($id);
            if (!$data)
            {
                return $this->fail("Screening not found", [], "Not Found", 404);
            }

            $Screening = $data->update($request->all());
            if(!$Screening)
            {
                DB::rollback();
                return $this->fail("There is something wrong");
            }
            DB::commit();
            return $this->success([
               "message" => "Screening updated"
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function updateStatus($id, StatusRequest $request)
    {
        try {
            $data = Screening::find($id);
            if(!$data)
            {
                return $this->fail("data not exist.");
            }
            $Screening = $data->update([
                "status" => $request->status
            ]);
            if(!$Screening)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
                "message" => "Screening status updated."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            $data = Screening::find($id);
            if(!$data)
            {
                return $this->fail("Screening not exist.");
            }
            $Screening = $data->delete();
            if(!$Screening)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
               'message' => 'Screening deleted'
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function listAll()
    {
        try {
            $data = Screening::where("status", 1)->get();
            return $this->success(ScreeningResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }


}
