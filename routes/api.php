<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\CinemaController;
use App\Http\Controllers\ProductAttributesController;


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
    Route::group(['prefix' => 'admin'], function(){
        Route::group(['prefix' => 'role'], function (){
            Route::post('', [RoleController::class, 'store']);
            Route::get('', [RoleController::class, 'index']);
            Route::get('/{id}', [RoleController::class, 'show']);
            Route::put('/{id}', [RoleController::class, 'update']);
            Route::delete('/{id}', [RoleController::class, 'destroy']);
            Route::patch("/{id}", [RoleController::class, "updateStatus"]);
        });
        Route::get("permission", [PermissionController::class, 'index']);
        Route::group(['prefix' => 'cinemas'], function (){
            Route::post('', [CinemaController::class, 'store']);
            Route::get('', [CinemaController::class, 'index']);
            Route::get('/{id}', [CinemaController::class, 'show']);
            Route::put('/{id}', [CinemaController::class, 'update']);
            Route::patch('/{id}', [CinemaController::class, 'updateStatus']);
            Route::delete('/{id}', [CinemaController::class, 'destroy']);
        });
        Route::group(['prefix'=> 'product-attribute'],function (){
            Route::post('',[ProductAttributesController::class,'store']);
            Route::get('',[ProductAttributesController::class,'index']);
            Route::put('/{id}',[ProductAttributesController::class,'update']);
            Route::patch('/{id}', [ProductAttributesController::class, 'updateStatus']);
            Route::delete('/{id}',[ProductAttributesController::class,'destroy']);
        });
        Route::group(['prefix' => 'users'], function(){
            Route::post('', [UserController::class, 'store']);
            Route::get('', [UserController::class, 'index']);
            Route::get('/{id}', [UserController::class, 'show']);
            Route::put('/{id}', [UserController::class, 'update']);
            Route::patch('/{id}', [UserController::class, 'updateStatus']);
            Route::delete('/{id}', [UserController::class, 'destroy']);
        });
        Route::group(['prefix' => 'customers'], function(){
            Route::get('', [CustomerController::class, 'index']);
            Route::get('/{id}', [CustomerController::class, 'show']);
            Route::patch('/{id}', [CustomerController::class, 'updateStatus']);
        });

        Route::group(['prefix' => 'profile'], function (){
            Route::get('', [UserController::class, 'showProfile']);
            Route::put('', [UserController::class, 'updateProfile']);
            Route::get('/avatar', [UserController::class, 'getAvatar']);
            Route::patch('/avatar', [UserController::class, 'updateAvatar']);
            Route::patch('', [UserController::class, 'updatePassword']);
        });
    });

});

Route::middleware(['auth:sanctum', 'customer'])->group(function () {
    Route::group(['prefix' => 'profile'], function (){
       Route::get('', [CustomerController::class, 'showProfile']);
       Route::put('', [CustomerController::class, 'updateProfile']);
       Route::patch('', [CustomerController::class, 'updatePassword']);
    });
});
