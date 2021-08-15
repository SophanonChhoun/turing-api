<?php

use App\Models\SeatType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\CinemaController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TheaterController;
use App\Http\Controllers\CastCrewController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\SeatTypeController;
use App\Http\Controllers\ScreeningController;
use App\Http\Controllers\MovieGenreController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\TicketSaleController;
use App\Http\Controllers\MovieRatingController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductVariantsController;
use App\Http\Controllers\ProductAttributesController;
use App\Http\Controllers\ProductAttributeValueController;
use App\Http\Controllers\ProductSaleController;
use App\Http\Controllers\CurrencyController;
use Telegram\Bot\Laravel\Facades\Telegram;
use App\Http\Controllers\AdvertisementController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\DashboardController;
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

Route::post('admin/send-mail', [MailController::class, 'sendEmail']);
Route::post("admin/verify-code", [MailController::class, "verifyCode"]);
Route::put("admin/reset-password", [MailController::class, "updatePassword"]);

Route::post('/bot/getupdates', function() {
    $updates = Telegram::getUpdates();
    return (json_encode($updates));
});

Route::middleware(['auth:sanctum', 'admin'])->group(function () {

    Route::group(['prefix' => 'admin'], function() {

        Route::get('/dashboard', [DashboardController::class, 'index']);

        Route::group(['prefix' => 'role'], function () {
            Route::post('', [RoleController::class, 'store']);
            Route::get('', [RoleController::class, 'index']);
            Route::get('/restore', [RoleController::class, 'restoreData']);
            Route::get('/all', [RoleController::class, 'listAll']);
            Route::get('/{id}', [RoleController::class, 'show']);
            Route::put('/{id}', [RoleController::class, 'update']);
            Route::delete('/{id}', [RoleController::class, 'destroy']);
            Route::patch("/{id}", [RoleController::class, "updateStatus"]);
        });

        Route::get("permission", [PermissionController::class, 'index']);
        Route::group(['prefix' => 'cinemas'], function () {
            Route::post('', [CinemaController::class, 'store']);
            Route::get('', [CinemaController::class, 'index']);
            Route::get('/restore', [CinemaController::class, 'restoreData']);
            Route::get('/user', [CinemaController::class, 'userCinema']);
            Route::get('/all', [CinemaController::class, 'listAll']);
            Route::get('/{id}', [CinemaController::class, 'show']);
            Route::put('/{id}', [CinemaController::class, 'update']);
            Route::patch('/{id}', [CinemaController::class, 'updateStatus']);
            Route::delete('/{id}', [CinemaController::class, 'destroy']);
        });

        Route::group(['prefix' => 'product-attribute'], function () {
            Route::post('', [ProductAttributesController::class, 'store']);
            Route::get('', [ProductAttributesController::class, 'index']);
            Route::get('/restore', [ProductAttributesController::class, 'restoreData']);
            Route::get('/all', [ProductAttributesController::class, 'listAll']);
            Route::get('/{id}', [ProductAttributesController::class, 'show']);
            Route::put('/{id}', [ProductAttributesController::class, 'update']);
            Route::patch('/{id}', [ProductAttributesController::class, 'updateStatus']);
            Route::delete('/{id}', [ProductAttributesController::class, 'destroy']);
        });

        Route::group(['prefix' => 'users'], function () {
            Route::post('', [UserController::class, 'store']);
            Route::get('', [UserController::class, 'index']);
            Route::get('/restore', [UserController::class, 'restoreData']);
            Route::get('/{id}', [UserController::class, 'show']);
            Route::put('/{id}', [UserController::class, 'update']);
            Route::patch('/{id}', [UserController::class, 'updateStatus']);
            Route::delete('/{id}', [UserController::class, 'destroy']);
        });

        Route::group(['prefix' => 'advertisements'], function() {
            Route::post('', [AdvertisementController::class, 'store']);
            Route::get('', [AdvertisementController::class, 'index']);
            Route::get('/restore', [AdvertisementController::class, 'restoreData']);
            Route::put('/{id}', [AdvertisementController::class, 'update']);
            Route::get('/{id}', [AdvertisementController::class, 'show']);
            Route::delete('/{id}', [AdvertisementController::class, 'destroy']);
            Route::get('/send/{id}', [AdvertisementController::class, 'send']);
        });

        Route::group(['prefix' => 'customers'], function () {
            Route::get('', [CustomerController::class, 'index']);
            Route::get('/restore', [CustomerController::class, 'restoreData']);
            Route::post('', [CustomerController::class, 'store']);
            Route::get('/all', [CustomerController::class, 'listAll']);
            Route::delete('/{id}', [CustomerController::class, 'destroy']);
            Route::get('/{id}', [CustomerController::class, 'show']);
            Route::patch('/{id}', [CustomerController::class, 'updateStatus']);
        });

        Route::group(['prefix' => 'genres'], function () {
            Route::get('', [MovieGenreController::class, 'index']);
            Route::get('/all', [MovieGenreController::class, 'listAll']);
            Route::post('', [MovieGenreController::class, 'store']);
            Route::get('/{id}', [MovieGenreController::class, 'show']);
            Route::put('/{id}', [MovieGenreController::class, 'update']);
            Route::patch('/{id}', [MovieGenreController::class, 'updateStatus']);
            Route::delete('/{id}', [MovieGenreController::class, 'destroy']);
        });

        Route::group(['prefix' => 'profile'], function () {
            Route::get('', [UserController::class, 'showProfile']);
            Route::put('', [UserController::class, 'updateProfile']);
            Route::get('/avatar', [UserController::class, 'getAvatar']);
            Route::patch('/avatar', [UserController::class, 'updateAvatar']);
            Route::patch('', [UserController::class, 'updatePassword']);
        });

        Route::group(['prefix' => 'productAttributeValue'], function () {
            Route::get('', [ProductAttributeValueController::class, 'index']);
            Route::get('/all', [ProductAttributeValueController::class, 'listAll']);
            Route::get('/restore', [ProductAttributeValueController::class, 'restoreData']);
            Route::post('', [ProductAttributeValueController::class, 'store']);
            Route::get('/{id}', [ProductAttributeValueController::class, 'show']);
            Route::put('/{id}', [ProductAttributeValueController::class, 'update']);
            Route::patch('/{id}', [ProductAttributeValueController::class, 'updateStatus']);
            Route::delete('/{id}', [ProductAttributeValueController::class, 'destroy']);
        });

        Route::group(['prefix' => 'movies'], function () {
            Route::post('', [MovieController::class, 'store']);
            Route::get('', [MovieController::class, 'index']);
            Route::get('/restore', [MovieController::class, 'restoreData']);
            Route::get('/all', [MovieController::class, 'listAll']);
            Route::get('/{id}', [MovieController::class, 'show']);
            Route::put('/{id}', [MovieController::class, 'update']);
            Route::patch('/{id}', [MovieController::class, 'updateStatus']);
            Route::delete('/{id}', [MovieController::class, 'destroy']);
        });

        Route::group(['prefix' => 'productCategory'], function () {
            Route::post('', [ProductCategoryController::class, 'store']);
            Route::get('', [ProductCategoryController::class, 'index']);
            Route::get('/restore', [ProductCategoryController::class, 'restoreData']);
            Route::get('/all', [ProductCategoryController::class, 'listAll']);
            Route::get('/{id}', [ProductCategoryController::class, 'show']);
            Route::put('/{id}', [ProductCategoryController::class, 'update']);
            Route::patch('/{id}', [ProductCategoryController::class, 'updateStatus']);
            Route::delete('/{id}', [ProductCategoryController::class, 'destroy']);
        });

        Route::group(['prefix' => 'products'], function () {
            Route::post('', [ProductController::class, 'store']);
            Route::get('', [ProductController::class, 'index']);
            Route::get('/restore', [ProductController::class, 'restoreData']);
            Route::get('/all', [ProductController::class, 'listAll']);
            Route::get('/{id}', [ProductController::class, 'show']);
            Route::put('/{id}', [ProductController::class, 'update']);
            Route::patch('/{id}', [ProductController::class, 'updateStatus']);
            Route::delete('/{id}', [ProductController::class, 'destroy']);
        });

        Route::group(['prefix' => 'productVariants'], function () {
            Route::post('', [ProductVariantsController::class, 'store']);
            Route::get('', [ProductVariantsController::class, 'index']);
            Route::get('/restore', [ProductVariantsController::class, 'restoreData']);
            Route::get('/all', [ProductVariantsController::class, 'listAll']);
            Route::get('/{id}', [ProductVariantsController::class, 'show']);
            Route::put('/{id}', [ProductVariantsController::class, 'update']);
            Route::patch('/{id}', [ProductVariantsController::class, 'updateStatus']);
            Route::delete('/{id}', [ProductVariantsController::class, 'destroy']);
        });
        Route::group(['prefix' => 'cast-crew'], function () {
            Route::get('', [CastCrewController::class, 'index']);
            Route::get('/count', [CastCrewController::class, 'count_cast_crew']);
            Route::post('', [CastCrewController::class, 'store']);
            Route::put('/{id}', [CastCrewController::class, 'update']);
            Route::delete('/{id}', [CastCrewController::class, 'destroy']);
            Route::get("/{id}", [CastCrewController::class, 'show']);
            Route::patch("/{id}", [CastCrewController::class, 'show']);
        });
        Route::group(['prefix' => 'language'], function () {
            Route::get('', [LanguageController::class, 'index']);
            Route::post('', [LanguageController::class, 'store']);
            Route::put('/{id}', [LanguageController::class, 'update']);
            Route::delete('/{id}', [LanguageController::class, 'destroy']);
        });
        Route::group(['prefix' => 'theatres'], function () {
            Route::get('', [TheaterController::class, 'index']);
            Route::get('/all', [TheaterController::class, 'listAll']);
            Route::get('/restore', [TheaterController::class, 'restoreData']);
            Route::post('', [TheaterController::class, 'store']);
            Route::get('/{id}', [TheaterController::class, 'show']);
            Route::patch('/{id}', [TheaterController::class, 'update']);
            Route::patch('/status/{id}', [TheaterController::class, 'updateStatus']);
            Route::delete('/{id}', [TheaterController::class, 'destroy']);
        });
        Route::group(['prefix' => 'seat-types'], function () {
            Route::post('', [SeatTypeController::class, 'store']);
            Route::get('', [SeatTypeController::class, 'index']);
            Route::get('/all', [SeatTypeController::class, 'listAll']);
            Route::get('/{id}', [SeatTypeController::class, 'show']);
            Route::put('/{id}', [SeatTypeController::class, 'update']);
            Route::patch('/{id}', [SeatTypeController::class, 'updateStatus']);
            Route::delete('/{id}', [SeatTypeController::class, 'destroy']);

        });
        Route::group(['prefix' => 'ratings'], function () {
            Route::post('', [MovieRatingController::class, 'store']);
            Route::get('', [MovieRatingController::class, 'index']);
            Route::get('/{id}', [MovieRatingController::class, 'show']);
            Route::put('/{id}', [MovieRatingController::class, 'update']);
            Route::patch('/{id}', [MovieRatingController::class, 'updateStatus']);
            Route::delete('/{id}', [MovieRatingController::class, 'destroy']);
            Route::get('/all', [MovieRatingController::class, 'listAll']);
        });

        Route::group(['prefix' => 'screenings'], function () {
            Route::post('', [ScreeningController::class, 'store']);
            Route::get('', [ScreeningController::class, 'index']);
            Route::get('/restore', [ScreeningController::class, 'restoreData']);
            Route::put('/{id}', [ScreeningController::class, 'update']);
            Route::patch('/{id}', [ScreeningController::class, 'updateStatus']);
            Route::delete('/{id}', [ScreeningController::class, 'destroy']);
            Route::get('/all', [ScreeningController::class, 'listAll']);
            Route::get('/grid/{id}', [ScreeningController::class, 'getGrid']);
            Route::get('/{id}', [ScreeningController::class, 'show']);
        });

        Route::group(['prefix' => 'ticket-sales'], function () {
            Route::get('/getMovies', [ScreeningController::class, 'getNowShowing']);
        });

        Route::group(['prefix' => 'tickets'], function () {
            Route::post('', [TicketController::class, 'store']);
            Route::get('', [TicketController::class, 'index']);
            Route::patch('/{id}', [TicketController::class, 'updateStatus']);
            Route::get('/all', [TicketController::class, 'listAll']);
            Route::get('/{id}', [TicketController::class, 'show']);
        });

        Route::group(['prefix' => 'sale'], function () {
            Route::post('', [ProductSaleController::class, 'store']);
            Route::get('', [ProductSaleController::class, 'index']);
            Route::get('/{id}', [ProductSaleController::class, 'show']);
        });
        Route::group(['prefix' => 'currency'], function () {
            Route::get('', [CurrencyController::class, 'index']);
            Route::get('/show', [CurrencyController::class, 'show']);
            Route::put('/{id}', [CurrencyController::class, 'update']);
        });
    });
});

Route::group(['prefix' => ''], function(){
    Route::group(['prefix' => 'movie'], function(){
        Route::get('', [MovieController::class, 'showMovieMobile']);
    });
});

Route::group(['prefix' => 'web'], function() {
    Route::post("login", [CustomerController::class, 'login']);
    Route::post("register", [CustomerController::class, 'signUp']);
    Route::group(['prefix' => 'movies'], function(){
        Route::get('/upcoming', [MovieController::class, 'upcomingMovie']);
        Route::get('/now-showing', [MovieController::class, 'nowShowingMovie']);
        Route::get('/advertisement', [MovieController::class, 'advertisement']);
        Route::get('/{id}', [MovieController::class, 'movieDetail']);
    });
    Route::group(['prefix' => 'screenings'], function(){
        Route::get('/now-showing', [ScreeningController::class, 'getNowShowing']);
    });
    Route::group(['prefix' => 'cinemas'], function(){
        Route::get('', [CinemaController::class, 'activeCinema']);
    });
    Route::group(['prefix' => 'products'], function(){
        Route::get('', [ProductController::class, 'productActive']);
    });
    Route::get('grid/{id}', [ScreeningController::class, 'getGrid']);
    Route::middleware(['auth:sanctum', 'customer'])->group(function () {
        Route::group(['prefix' => 'tickets'], function(){
            Route::post('', [TicketController::class, 'buyTicket']);
            Route::get('', [TicketController::class, 'customerTicket']);
            Route::get('/{id}', [TicketController::class, 'show']);
        });
        Route::group(['prefix' => 'profile'], function (){
            Route::get('', [CustomerController::class, 'showProfile']);
            Route::put('', [CustomerController::class, 'updateProfile']);
            Route::patch('', [CustomerController::class, 'updatePassword']);
        });
    });
    Route::get('currency', [CurrencyController::class, 'show']);
});

Route::middleware(['auth:sanctum', 'customer'])->group(function () {
    Route::group(['prefix' => 'profile'], function (){
       Route::get('', [CustomerController::class, 'showProfile']);
       Route::put('', [CustomerController::class, 'updateProfile']);
       Route::patch('', [CustomerController::class, 'updatePassword']);
    });
});
