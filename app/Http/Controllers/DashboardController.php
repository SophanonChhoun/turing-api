<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;

class DashboardController extends Controller
{
    public function index()
    {
        try {

        } catch (Exception $exception) {
            return $this->fail($exception->getMessage());
        }
    }
}
