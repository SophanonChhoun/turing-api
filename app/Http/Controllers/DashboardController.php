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
            $data = Cinema::with('productSale', 'tickets')->latest()->get();
            return $this->success([
                'products' => DashboardProductResource::collection($data),
                'tickets' => DashboardTicketResource::collection($data),
            ]);
        } catch (Exception $exception) {
            return $this->fail($exception->getMessage());
        }
    }
}
