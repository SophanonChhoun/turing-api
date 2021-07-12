<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CustomerController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post("admin/login", [UserController::class, 'login']);
Route::post("login", [CustomerController::class, 'login']);
Route::post("register", [CustomerController::class, 'signUp']);


Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::get('/admin/me', [UserController::class, 'test']);
});

Route::middleware(['auth:sanctum', 'customer'])->group(function () {
    Route::get('/me', [CustomerController::class, 'test']);
});
