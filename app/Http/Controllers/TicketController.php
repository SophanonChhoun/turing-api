<?php

namespace App\Http\Controllers;

use App\Models\Screening;
use App\Models\Seat;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StatusRequest;
use App\Http\Requests\TicketRequest;
use App\Http\Resources\TicketResource;
use Exception;

class TicketController extends Controller
{
    public function index()
    {
        try {
            $data = Ticket::with('seat')->latest()->get();
            return $this->success(TicketResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function store(TicketRequest $request)
    {
        DB::beginTransaction();
        try {
            foreach ($request['seats'] as $key => $seat)
            {
                $seat['screeningId'] = $request['screeningId'];
                $seat['movieName'] = $request['movieName'];
                $seat['cinemaName'] = $request['cinemaName'];
                $seat['theaterName'] = $request['theaterName'];
                $seat['userId'] = $request['userId'];
                $getSeat = Seat::with('seatType')->findOrFail($seat['seatId']);
                $seat['seatName'] = $getSeat->name;
                $seat['seatType'] = $getSeat->seatType->name ?? '';
                $data = Ticket::create($seat);
                if (!$data)
                {
                    DB::rollBack();
                    return $this->fail("Something went wrong");
                }
            }
            DB::commit();
            return $this->success([
                'message' => 'Tickets created'
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $data = Ticket::with("user")->findOrFail($id);
            return $this->success([
                'id' => $data->id,
                'price' => $data->price,
                'movie' => $data->movieName,
                'seatType' => $data->seatType,
                'seatName' => $data->seatName,
                'theaterName' => $data->theaterName,
                'cinemaName'=> $data->cinemaName,
                'userName' => $data->user->name ?? '',
                'checked_in' => $data->checked_in
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function listAll()
    {
        try {
            $data = Ticket::where('checked_in', 1)->get();
            return $this->success(TicketResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function updateStatus($id, StatusRequest $request)
    {
        try {
            $data = Ticket::find($id);
            if(!$data)
            {
                return $this->fail("Ticket not exist.");
            }
            $data = $data->update([
                "checked_in" => $request->status
            ]);
            if(!$data)
            {
                return $this->fail("Ticket failed to check in.");
            }
            return $this->success([
                "message" => "Ticket check in successfully."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

}
