<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserBuyTicketRequest;
use App\Http\Resources\TicketAdminResource;
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
            $data = Ticket::with('seat', 'user', 'screening')->latest()->get();
            return $this->success(TicketAdminResource::collection($data));
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
                $getSeat = Seat::with('seatType')->findOrFail($seat['id']);
                $seat['seatName'] = $getSeat->name;
                $seat['seatType'] = $getSeat->seatType->name ?? '';
                $seatExit = Ticket::where("screeningId", $request['screeningId'])->where("seatId", $seat['id'])->get()->first();
                if ($seatExit)
                {
                    return $this->fail("Sorry, seats: " . $seat['seatName'] ." is not available");
                }
                $seat['screeningId'] = $request['screeningId'];
                $seat['movieName'] = $request['movieName'];
                $seat['cinemaName'] = $request['cinemaName'];
                $seat['theaterName'] = $request['theaterName'];
                $seat['userId'] = $request['userId'];
                $seat['seatId'] = $seat['id'];
                $data = Ticket::create($seat);
                if (!$data)
                {
                    DB::rollBack();
                    return $this->fail("Something went wrong with buying tickets.");
                }
            }
            DB::commit();
            return $this->success([
                'message' => 'Tickets bought successfully.'
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $data = Ticket::with("user", "checkBy")->findOrFail($id);
            $screening = Screening::find($data->screeningId);
            return $this->success([
                'id' => $data->id,
                'price' => $data->price,
                'movie' => $data->movieName,
                'seatType' => $data->seatType,
                'seatName' => $data->seatName,
                'theaterName' => $data->theaterName,
                'cinemaName'=> $data->cinemaName,
                'userName' => $data->user->name ?? '',
                'checked_in' => $data->checked_in,
                'check_by' => $data->checkBy->name ?? '',
                'start_time' => $screening->start_time ?? '',
                'date' => $screening->date ?? '',
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

    public function updateStatus($id, Request $request)
    {
        try {
            $data = Ticket::find($id);
            if(!$data)
            {
                return $this->fail("Ticket not exist.");
            }
            $data = $data->update([
                "checked_in" => $request->checked_in,
                "checked_by" => auth()->user()->id
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

    public function buyTicket(UserBuyTicketRequest $request)
    {
        DB::beginTransaction();
        try {
            foreach ($request['seats'] as $key => $seatId)
            {
                $getSeat = Seat::with('seatType')->findOrFail($seatId);
                $seat['seatName'] = $getSeat->name;
                $seat['seatType'] = $getSeat->seatType->name ?? '';
                $screening = Screening::findOrFail($request['screeningId']);
                $seatExit = Ticket::where("screeningId", $request['screeningId'])->where("seatId", $seatId)->get()->first();
                if ($seatExit)
                {
                    return $this->fail("Sorry, seats: " . $seat['seatName'] ." is not available");
                }
                $seat['screeningId'] = $request['screeningId'];
                $seat['movieName'] = $request['movieName'];
                $seat['cinemaName'] = $request['cinemaName'];
                $seat['theaterName'] = $request['theatreName'];
                $seat['userId'] = auth()->user()->id;
                $seat['seatId'] = $seatId;
                $seat['price'] = $screening->price * $getSeat->seatType->priceFactor;
                $data = Ticket::create($seat);
                if (!$data)
                {
                    DB::rollBack();
                    return $this->fail("Something went wrong with buying tickets.");
                }
            }
            DB::commit();
            return $this->success([
                'message' => 'Tickets bought successfully.'
            ]);
        }catch (Exception $exception){
            DB::rollBack();
            return $this->fail($exception->getMessage());
        }
    }

    public function customerTicket()
    {
        try {
            $data = Ticket::with('seat', 'user', 'screening')->where("userId", auth()->user()->id)->latest()->get();
            return $this->success(TicketResource::collection($data));
        }catch (Exception $exception) {
            return $this->fail($exception->getMessage());
        }
    }
}
