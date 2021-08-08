<?php

namespace App\Http\Controllers;

use App\Core\MediaLib;
use App\Http\Requests\CinemaRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\CinemaListResource;
use App\Models\Cinema;
use App\Models\CinemaHasUser;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class CinemaController extends Controller
{
    public function store(CinemaRequest $request)
    {
        DB::beginTransaction();
        try {
            if (isset($request['image'])  && !empty($request['image']))
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
            $data = Cinema::with("media")->latest()->get();
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
        DB::beginTransaction();
        try {
            $cinema = Cinema::find($id);
            if(!$cinema)
            {
                return $this->fail("Cinema not exist.");
            }
            $cinema = $cinema->delete();
            CinemaHasUser::where("cinemaId", $id)->delete();
            if(!$cinema)
            {
                DB::rollBack();
                return $this->fail("Something went wrong");
            }
            DB::commit();
            return $this->success([
               'message' => 'Cinema deleted'
            ]);
        }catch (Exception $exception){
            DB::rollBack();
            return $this->fail($exception->getMessage());
        }
    }

    public function listAll()
    {
        try {
            $data = Cinema::with("media")->where("status", 1)->get();
            return $this->success(CinemaListResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function userCinema()
    {
        try {
            $user = User::with("cinemas")->find(auth()->user()->id);
            return $this->success($user->cinemas);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function restoreData()
    {
        try {
            Cinema::withTrashed()->restore();
            CinemaHasUser::withTrashed()->restore();
            $data = Cinema::with("media")->latest()->get();
            return $this->success(CinemaListResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
