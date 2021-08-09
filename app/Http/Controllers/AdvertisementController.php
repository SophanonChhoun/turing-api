<?php

namespace App\Http\Controllers;

use App\Core\MediaLib;
use App\Http\Requests\AdvertisementRequest;
use App\Http\Resources\AdvertisementResource;
use App\Models\Advertisement;
use Illuminate\Http\Request;
use Telegram\Bot\FileUpload\InputFile;
use Telegram\Bot\Laravel\Facades\Telegram;
use Exception;
use Illuminate\Support\Facades\DB;

class AdvertisementController extends Controller
{
    public function index()
    {
        try {
            $data = Advertisement::with("media")->latest()->get();
            return $this->success(AdvertisementResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }


    public function restoreData()
    {
        try {
            Advertisement::withTrashed()->restore();
            $data = Advertisement::with("media")->latest()->get();
            return $this->success(AdvertisementResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function store(AdvertisementRequest $request)
    {
        DB::beginTransaction();
        try {
            if (isset($request['image'])  && !empty($request['image']))
            {
                $request['mediaId'] = MediaLib::generateImageBase64($request['image']);
            }else{
                return $this->fail("", [
                    'Image field is required'
                ], 'InvalidRequestError', 412);
            }
            $data = Advertisement::create($request->all());
            if(!$data)
            {
                DB::rollback();
                return $this->fail("Something went wrong");
            }
            DB::commit();
            return $this->success([
                "message" => "Advertisement Created."
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $data = Advertisement::with("media")->findOrFail($id);
            return $this->success([
                "id" => $data->id,
                "description" => $data->description,
                "photo" => $data->media->file_url ?? ''
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function update($id, AdvertisementRequest $request)
    {
        DB::beginTransaction();
        try {
            $advertisement = Advertisement::findOrFail($id);
            if (isset($request['image']))
            {
                $request['mediaId'] = MediaLib::generateImageBase64($request['image']);
            }
            $advertisement = $advertisement->update($request->all());
            if(!$advertisement)
            {
                DB::rollback();
                return $this->fail("Something went wrong.");
            }
            DB::commit();
            return $this->success([
                "message" => "Advertisement updated."
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            Advertisement::findOrFail($id)->delete();
            return $this->success([
                "message" => "Advertisement deleted."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function send($id)
    {
        try {
            $data = Advertisement::findOrFail($id);
            if (!$data) {
                return $this->fail('Data not found.');
            }
            $send = Telegram::sendPhoto([
                'chat_id' => env('TELEGRAM_CHAT_ID', ''),
                'photo' => InputFile::create(public_path('uploads/images/'. $data->file_name)),
                'caption' => $data->description,
                'parse_mode' => 'HTML',
            ]);
            if (!$send)
            {
                return $this->fail('Something went wrong');
            }
            return $this->success([
               'message' => "Sent to telegram completed"
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function test(Request $request)
    {
        $text = "A new contact us query\n"
            . "<b>Email Address: </b>\n"
            . "$request->email\n"
            . "<b>Message: </b>\n"
            . $request->message;
        $photo = \App\Models\ProductCategory::with('media')->find(1)->media->file_name ?? '';
        Telegram::sendPhoto([
            'chat_id' => env('TELEGRAM_CHAT_ID', ''),
            'photo' => InputFile::create(public_path('uploads/images/'. $photo)),
        ]);
        return 'Successful';
    }
}
