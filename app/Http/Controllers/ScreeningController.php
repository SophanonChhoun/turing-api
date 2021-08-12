<?php

namespace App\Http\Controllers;

use App\Http\Requests\ScreeningCreateRequest;
use App\Http\Resources\SeatResource;
use App\Models\Movie;
use App\Models\Screening;
use App\Models\Seat;
use App\Models\Theater;
use App\Models\Ticket;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StatusRequest;
use App\Http\Requests\ScreeningRequest;
use App\Http\Resources\ScreeningResource;
use Exception;

class ScreeningController extends Controller
{
    public function index()
    {
        try {
            $data = Screening::with("sub", "dub","movie","theater", "cinema")->latest()->get();
            return $this->success(ScreeningResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function restoreData(Request $request)
    {
        try {
            $data = Screening::withTrashed();
            if (isset($request['date']))
            {
                $data = $data->where("deleted_at", ">=", Carbon::parse($request['date'])->toDateString());
            }
            $data->restore();
            $data = Screening::with("sub", "dub","movie","theater", "cinema")->latest()->get();
            return $this->success(ScreeningResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $data = Screening::with('cinema')->find($id);
            if (!$data)
            {
                return $this->fail("data not found" ,[], "", 404);
            }
            return $this->success([
                "id" => $data->id,
                "movie_title" => $data->movie->title ?? '',
                "price" => $data->price,
                "theater" => $data->theater->name ?? '',
                "language_sub" => $data->subtitle,
                "language_dub" => $data->dubbed,
                "date" => $data->date,
                "start_time" => $data->start_time,
                "status" => $data->status,
                "theaterId" => $data->theaterId,
                "subId" => $data->subId,
                "dubId" => $data->dubId,
                "movieId" => $data->movieId,
                "cinema" => $data->cinema->name ?? '',
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function store(ScreeningCreateRequest $request)
    {
        DB::beginTransaction();
        try{
            $movie = Movie::findOrFail($request['movieId']);
            if (!$movie)
            {
                return $this->fail("Sorry this movie is not exist.");
            }
            foreach ($request['screenings'] as $key => $screening)
            {
                if (Screening::where("theaterId", $screening['theaterId'])->where("date", $screening['date'])->where("start_time", $screening['start_time'])->get()->first())
                {
                    DB::rollBack();
                    $theater = Theater::find($screening['theaterId']) ?? '';
                    return $this->fail("Screening start time ". $screening['start_time'] . " at " . $screening['date'] . " in theater " . $theater->name . " already exist.");
                }
                if ($movie->releasedDate > $request['date'])
                {
                    DB::rollBack();
                    return $this->fail("Screening must have date equal or greater than ".$movie->releasedDate);
                }
                $screening['movieId'] = $request['movieId'];
                $screening['cinemaId'] = Theater::find($screening['theaterId'])->cinemaId ?? 0;
                $data = Screening::create($screening);
                if (!$data)
                {
                    DB::rollBack();
                    return $this->fail("There is something wrong with insert screening.");
                }
            }
            if(!$data)
            {
                DB::rollback();
                return $this->fail("Screening failed to created.");
            }

            DB::commit();
            return $this->success([
               "message"  => "Screening created."
            ]);
        }catch(Exception $exception)
        {
            DB::rollback();
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
            $request['cinemaId'] = Theater::findOrFail($request['theaterId'])->cinemaId;
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
            $data = Screening::where("status", true)->get();
            return $this->success(ScreeningResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function getGrid($id)
    {
        try {
            $screening = Screening::with("movie")->findOrFail($id);
            $theater = Theater::with("cinema")->findOrFail($screening->theaterId);
            for ($i=0; $i < $theater->row; $i++) {
                for ($j=0; $j < $theater->col; $j++) {
                    $grid[$i][$j] = null;
                }
            }
            $seats = SeatResource::collection(Seat::with("seatType")->where("theaterId", $screening->theaterId)->get());
            foreach ($seats as $key => $seat) {
                $avaliable = Ticket::where("seatId", $seat->id)->where("screeningId", $id)->get()->first();
                $grid[$seat->row][$seat->col] = [
                    "id" => $seat->id,
                    "name" => $seat->name,
                    "seatType" => $seat->seatType,
                    "status" => $seat->status,
                    "booked" => $avaliable ? true : false,
                    "price" => round(($seat->seatType->priceFactor * $screening->price), 3),
                    "col" => $seat->col,
                    "row" => $seat->row
                ];
            }
            return $this->success([
                "screeningId" => $id,
                "cinemaName" => $theater->cinema->name ?? '',
                "theaterName" => $theater->name,
                "movieName" => $screening->movie->title ?? '',
                "row" => $theater->row,
                "col" => $theater->col,
                "grid" => $grid
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function getNowShowing()
    {
        try {
            $movies = Movie::where("status", true)->where("releasedDate", "<=", Carbon::now()->toDateString())->get();
            $movies = $movies->map(function ($movie){
                $movie->screenings = array_values(Screening::where("movieId", $movie->id)
                    ->where("date", ">=", Carbon::now()->toDateString())
                    ->orderBy("date")->orderBy("start_time")->get()->groupBy("date")->toArray());
                return $movie;
            });
            return $this->success($movies);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
