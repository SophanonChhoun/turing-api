<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StatusRequest;
use App\Http\Requests\TicketRequest;
use App\Http\Resources\TicketResource;

class TicketController extends Controller
{
    public function index()
    {
        try {
            $data = Ticket::with('seat','screening','payment')->latest()->get();
            return $this->success(TicketResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        } 
    } 

    public function store(TicketRequest $request)
    {   
        DB::beginTransaction();
        try {
            $data = Ticket::create($request->all());
            if(!$data)
            {
                DB::rollback();
                return $this->fail('Ticket failed to create.');
            }
            DB::commit();
            return $this->success([
                'message' => 'Ticket created'
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $data = TIcket::findOrFail($id);
            return $this->success([
                'id' => $data->id,
                'price' => $data->price,
                'movie' => $data->screening->movie->title ?? '',
                'seat' => $data->seat->name ?? '',
                'cinema' => $data->payment->cinema->name ?? '',
                'customer' => $data->payment->customer->name ?? '',
                'theater' => $data->screening->theater->name ?? '',
                'checked_in'=> $data->checked_in
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
                "checked_in" => $request->checked_in
            ]);
            if(!$data)
            {
                return $this->fail("Ticket failed to update status.");
            }
            return $this->success([
                "message" => "Ticket status updated."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

}
