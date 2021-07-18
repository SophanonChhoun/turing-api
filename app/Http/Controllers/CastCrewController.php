<?php

namespace App\Http\Controllers;
use App\Core\MediaLib;
use App\Http\Resources\CastCrewResource;
use App\Models\CastCrew;
use Exception;
use App\Http\Requests\CastCrewRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CastCrewController extends Controller
{
    public function store( CastCrewRequest $request){
        DB::beginTransaction();
        try{
            if (isset($request['image']))
            {
                $request['mediaId'] = MediaLib::generateImageBase64($request['image']);
            }else{
                return $this->fail('Image field is required');
            }
            $firstname=$request['firstName'];
            $lastname=$request['lastName'];
            $data = CastCrew::create($request->all());
            if(!$data)
            {
                DB::rollback();
                return $this->fail('There is something wrong. data store not success');
            }
            DB::commit();
            return $this->success([
                'message' => "CastCrew Created successfully with  Fist name:$firstname and Last name:$lastname"
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function index(){
        try{
            $data = CastCrew::with("media")->get();
            return $data;
//            return $this->success(CastCrewResource::collection($data));
        }
        catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function update($id ,CastCrewRequest $request){
        DB::beginTransaction();
        try {
            $CastCrew = CastCrew::find($id);
            if (!$CastCrew)
            {
                return $this->fail([
                    "message" => "CastCrew ID: $id not found"
                ], 404);
            }
            if (isset($request['image']))
            {
                $request['mediaId'] = MediaLib::generateImageBase64($request['image']);
            }
            $CastCrew = $CastCrew->update($request->all());
            if(!$CastCrew)
            {
                DB::rollback();
                return $this->fail("There is something wrong");
            }
            DB::commit();
            return $this->success([
                "message" => "CastCrew ID: $id updated"
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            $castcrew = CastCrew::find($id);
            if(!$castcrew)
            {
                return $this->fail("CastCrew id :$id not exist.");
            }
            $castcrew = $castcrew->delete();
            if(!$castcrew)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
                'message' => "CastCrew id: $id deleted"
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
    public function count_cast_crew(){
        try{
            $data = CastCrew::count();
            return $data;
//            return $this->success(CastCrewResource::collection($data));
        }
        catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }
}
