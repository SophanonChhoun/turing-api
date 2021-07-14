<?php

namespace App\Http\Controllers;

use App\Core\MediaLib;
use App\Http\Requests\CinemaRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\CinemaListResource;
use App\Models\Cinema;
use App\Models\Theater;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB;

class CinemaController extends Controller
{
    public function store(CinemaRequest $request)
    {
        DB::beginTransaction();
        try {
            if (isset($request['image']))
            {
                $request['mediaId'] = MediaLib::generateImageBase64($request['image']);
            }else{
                return $this->fail('Image field is required');
            }
            $data = Cinema::create($request->all());
            if(!$data)
            {
                DB::rollback();
                return $this->fail('There is something wrong.');
            }
            DB::commit();
            return $this->success([
                'message' => 'Cinema created'
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function index()
    {
        try {
            $data = Cinema::with("media")->get();
            return $this->success(CinemaListResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $cinema = Cinema::with("media")->find($id);
            return $this->success([
                "id" => $cinema->id,
                "name" => $cinema->name,
                "location" => $cinema->location,
                "status" => $cinema->status,
                "photo" => $cinema->media->file_url ?? '',
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function update($id, CinemaRequest $request)
    {
        DB::beginTransaction();
        try {
            $cinema = Cinema::find($id);
            if (!$cinema)
            {
                return $this->fail([
                    "message" => "Cinema not found"
                ], 404);
            }
            if (isset($request['image']))
            {
                $request['mediaId'] = MediaLib::generateImageBase64($request['image']);
            }
            $cinema = $cinema->update($request->all());
            if(!$cinema)
            {
                DB::rollback();
                return $this->fail("There is something wrong");
            }
            DB::commit();
            return $this->success([
               "message" => "Cinema updated"
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function updateStatus($id, StatusRequest $request)
    {
        try {
            $cinema = Cinema::find($id);
            if(!$cinema)
            {
                return $this->fail("Cinema not exist.");
            }
            $cinema = $cinema->update([
                "status" => $request->status
            ]);
            if(!$cinema)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
                "message" => "Cinema status updated."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            $cinema = Cinema::find($id);
            if(!$cinema)
            {
                return $this->fail("Cinema not exist.");
            }
            $cinema = $cinema->delete();
            if(!$cinema)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
               'message' => 'Cinema deleted'
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
