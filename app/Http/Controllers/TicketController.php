<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserBuyTicketRequest;
use App\Http\Resources\TicketAdminResource;
use App\Models\Payment;
use App\Models\Screening;
use App\Models\Seat;
use App\Models\Ticket;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StatusRequest;
use App\Http\Requests\TicketRequest;
use App\Http\Resources\TicketResource;
use Exception;
use Stripe\Charge;
use Stripe\Stripe;
use Stripe\StripeClient;

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
            $tickets = array();
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
                $screening = Screening::findOrFail($request['screeningId']);
                $data->start_time = $screening->start_time;
                $data->date = $screening->date;
                array_push($tickets, $data);
                if (!$data)
                {
                    DB::rollBack();
                    return $this->fail("Something went wrong with buying tickets.");
                }
            }
            DB::commit();
            return $this->success($tickets);
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
            $payment = Payment::find($request['paymentId']);
            if (!$payment)
            {
                return $this->fail("This payment card id is not exist.");
            }
            $stripe = new StripeClient(env('STRIPE_SECRET'));
            $token = $stripe->tokens->create([
                'card' => [
                    'number' => Crypt::decrypt($payment->number),
                    'exp_month' => $payment->exp_month,
                    'exp_year' => $payment->exp_year,
                    'cvc' => Crypt::decrypt($payment->cvc),
                ],
            ]);
            Stripe::setApiKey(env('STRIPE_SECRET'));
            $screening = Screening::findOrFail($request['screeningId']);
            foreach ($request['seats'] as $key => $seatId)
            {
                $getSeat = Seat::with('seatType')->findOrFail($seatId);
                $seat['seatName'] = $getSeat->name;
                $seat['seatType'] = $getSeat->seatType->name ?? '';
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
                $price[$key] = $seat['price'];
                $data = Ticket::create($seat);
                if (!$data)
                {
                    DB::rollBack();
                    return $this->fail("Something went wrong with buying tickets.");
                }
            }
            $token = $stripe->tokens->create([
                'card' => [
                    'number' => Crypt::decrypt($payment->number),
                    'exp_month' => $payment->exp_month,
                    'exp_year' => $payment->exp_year,
                    'cvc' => Crypt::decrypt($payment->cvc),
                ],
            ]);
            Charge::create ([
                "amount" => array_sum($price) * 100,
                "currency" => "usd",
                "source" => $token,
                "description" => "Payment for movie " . $request['movieName'] . " on " . Carbon::createFromFormat('Y-m-d', $screening->date)->format('d/m/Y')
            ]);
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
