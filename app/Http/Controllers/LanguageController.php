<?php

namespace App\Http\Controllers;

use App\Http\Requests\LanguageRequest;
use App\Http\Resources\LanguageResource;
use App\Models\Language;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LanguageController extends Controller
{
    public function store(LanguageRequest $request){
        DB::beginTransaction();
        try {
            $data = Language::create($request->all());
            if(!$data)
            {
                DB::rollback();
                return $this->fail('There is something wrong. data store not success');
            }
            DB::commit();
            return $this->success([
                'message' => 'Language Created successfully'
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function index(){
        try{
            $data = Language::all();
            return $this->success(LanguageResource::collection($data));
        }
        catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function update(LanguageRequest $request, $id){
        DB::beginTransaction();
        try {
            $language= Language::find($id);
            if (!$language)
            {
                return $this->fail("language ID:$id not found", 404);
            }
            $language= $language->update($request->all());
            if(!$language)
            {
                DB::rollback();
                return $this->fail("There is something wrong");
            }
            DB::commit();
            return $this->success([
                "message" => "language '.$id.'updated"
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function destroy($id){
        DB::beginTransaction();
        try{
            $language = Language::find($id);
            if(!$language){
                return $this->fail("language ID:$id not found");
            }
            $language=$language->delete();
            if(!$language)
            {
                return $this->fail("Something went wrong");
            }
            DB::commit();
            return $this->success([
                'message' => "Language ID: $id deleted successfully"
            ]);
        }
        catch(Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }

    }


}
