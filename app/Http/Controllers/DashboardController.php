<?php

namespace App\Http\Controllers;

use App\Http\Resources\DashboardProductResource;
use App\Http\Resources\DashboardTicketResource;
use App\Models\Cinema;
use Illuminate\Http\Request;
use Exception;

class DashboardController extends Controller
{
    public function index()
    {
        try {
            $products = Cinema::with('productSale')->latest()->get();
            $tickets = Cinema::with('tickets')->latest()->get();
            return $this->success([
                'products' => DashboardProductResource::collection($products),
                'tickets' => DashboardTicketResource::collection($tickets),
            ]);
        } catch (Exception $exception) {
            return $this->fail($exception->getMessage());
        }
    }
}
