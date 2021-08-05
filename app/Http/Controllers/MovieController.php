<?php

namespace App\Http\Controllers;

use App\Core\MediaLib;
use App\Http\Requests\MovieRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\ListResource;
use App\Http\Resources\ListTitleResource;
use App\Http\Resources\MovieCustomerResource;
use App\Http\Resources\MovieResource;
use App\Http\Resources\MovieTimeResource;
use App\Http\Resources\PhotoResource;
use App\Http\Resources\ScreeningCinemaResource;
use App\Models\Cinema;
use App\Models\Movie;
use App\Models\MovieCast;
use App\Models\MovieDirector;
use App\Models\MovieGenre;
use App\Models\MovieGenreHasMovie;
use App\Models\MovieRating;
use App\Models\Screening;
use Carbon\Carbon;
use Illuminate\Http\Request;
use DB;
use Exception;
use Illuminate\Support\Facades\Date;

class MovieController extends Controller
{
    public function store(MovieRequest $request)
    {
        DB::beginTransaction();
        try {
            $movie = Movie::create($request->all());
            $cast = MovieCast::store($movie->id, $request['movieCasts']);
            $directors = MovieDirector::store($movie->id, $request['movieDirectors']);
            $genres = MovieGenreHasMovie::store($movie->id, $request['movieGenres']);
            if(!$movie || !$cast || !$directors || !$genres)
            {
                DB::rollback();
                return $this->fail("Something went wrong");
            }
            DB::commit();
            return $this->success([
               "message"  => "movie created."
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function index()
    {
        try {
            $data = Movie::with("rating", "genres", "directors", "casts")->latest()->get();
            return $this->success(MovieResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $data = Movie::with(
                "directors",
                "rating",
                "casts",
                "genres",
            )->findOrFail($id);
            return $this->success([
                "id" => $data->id,
                "title" => $data->title,
                "releasedDate" => $data->releasedDate,
                "synopsis" => $data->synopsis,
                "rated" => $data->rating,
                "trailerUrl" => $data->trailerUrl,
                "runningTime" => $data->runningTime,
                "poster" => $data->poster,
                "backdrop" => $data->backdrop,
                "movieDirectors" => ListResource::collection($data->directors),
                "movieCasts" => ListResource::collection($data->casts),
                "movieGenres" => ListResource::collection($data->genres),
                "status" => $data->status
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function update($id, MovieRequest $request)
    {
        DB::beginTransaction();
        try {
            $movie = Movie::findOrFail($id)->update($request->all());
            $cast = MovieCast::store($id, $request['movieCasts']);
            $directors = MovieDirector::store($id, $request['movieDirectors']);
            $genres = MovieGenreHasMovie::store($id, $request['movieGenres']);
            if(!$movie || !$cast || !$directors || !$genres)
            {
                DB::rollback();
                return $this->fail("Something went wrong");
            }
            DB::commit();
            return $this->success([
                "message"  => "movie updated."
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function updateStatus($id, StatusRequest $request)
    {
        try {
            Movie::findOrFail($id)->update($request->all());
            return $this->success([
               "message" => "Movie Status updated."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function destroy($id)
    {
        DB::beginTransaction();
        try {
            Movie::findOrFail($id)->delete();
            MovieCast::where("movieId", $id)->delete();
            MovieDirector::where("movieId", $id)->delete();
            MovieGenreHasMovie::where("movieId", $id)->delete();
            DB::commit();
            return $this->success([
               "message" => "Movie deleted."
            ]);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function listAll()
    {
        try {
            $data = Movie::where("status", 1)->latest()->get();
            return $this->success(ListTitleResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function showMovieMobile()
    {
        try {
            $upComingMovies = Movie::with("rating", "media", "backdropImage", "genres")->where("status", true)->whereDate('releasedDate', '>',Carbon::now()->toDateString())->get();
            $nowShowingMovies = Movie::where("status", true)->whereDate('releasedDate', '<=',Carbon::now()->toDateString())->limit(5)->get();
            return $this->success([
                'upComingMovies' => MovieCustomerResource::collection($upComingMovies),
                'nowShowingMovies' => MovieCustomerResource::collection($nowShowingMovies)
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function upcomingMovie()
    {
        try {
            $upComingMovies = Movie::with(
                "directors",
                "rating",
                "casts",
                "genres",
            )->where("status", true)->whereDate('releasedDate', '>',Carbon::now()->toDateString())->get();
            return $this->success(PhotoResource::collection($upComingMovies));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function nowShowingMovie()
    {
        try {
            $nowShowingMovies = Movie::with(
                "directors",
                "rating",
                "casts",
                "genres",
            )->where("status", true)->whereDate('releasedDate', '<=',Carbon::now()->toDateString())->get();
            return $this->success(PhotoResource::collection($nowShowingMovies));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function advertisement()
    {
        try {
            return $this->success(MovieCustomerResource::collection(Movie::with("rating", "genres")->where("status", true)->whereDate('releasedDate', '>',Carbon::now()->toDateString())->limit(3)->get()));
        } catch (Exception $exception) {
            return $this->fail($exception->getMessage());
        }
    }

    public function movieDetail($id)
    {
        try {
            $movie = Movie::with("rating", "genres")->findOrFail($id);
            $cinemaId = Screening::where("movieId", $id)->get()->pluck('cinemaId');
            $cinema = Cinema::with("availableScreenings")->whereIn("id", $cinemaId)->get();
            return $this->success([
                "id" => $movie->id,
                "title" => $movie->title,
                "synopsis" => $movie->synopsis,
                "rated" => $movie->rating->title ?? '',
                "genres" => $movie->genres->pluck("name"),
                "poster" => $movie->poster,
                "backdrop" => $movie->backdrop,
                "trailerUrl" => $movie->trailerUrl,
                "cinemas" => ScreeningCinemaResource::collection($cinema),
            ]);
        }catch (Exception $exception) {
            return $this->fail($exception->getMessage());
        }
    }

    public function listMovie()
    {
        try {
            $movies = Movie::with("availableScreenings")
                ->where("releasedDate", '<=',Carbon::now()->toDateString())
                ->where("status", true)->get();
            return $this->success(MovieTimeResource::collection($movies));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
