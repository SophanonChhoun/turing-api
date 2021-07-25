<?php

namespace App\Http\Controllers;
use Exception;
use App\Models\Seat;
use App\Models\Customer;
use App\Models\TicketSale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\TicketSaleResource;

class TicketSaleController extends Controller
{
    public function index()
    {
        try {
            $data = TicketSale::with('customer','screening','cinema')->latest()->get();
            return $this->success(TicketSaleResource::collection($data));
        }
        catch(Exception $exception)
        {
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try{
            $data = TicketSale::findOrFail($id);
            if (!$data)
            {
                return $this->fail([
                    "message" => "data not found"
                ], 404);
            }
            return $this->success(
                [
                    'id' => $data->id,
                    'customer' => $data->customer->name ?? '',
                    'movie' => $data->screening->movie->title ?? '',
                    'seat' => $data->screening->seat ?? '',
                    'cinema' => $data->cinema->name ?? '',
                    'total' => $data->total,
                ]
            );
        }
        catch(Exception $exception)
        {
            return $this->fail($exception->getMessage());
        }
    }    
}
