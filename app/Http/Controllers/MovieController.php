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
use App\Models\Theater;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

class MovieController extends Controller
{
    public function store(MovieRequest $request)
    {
        DB::beginTransaction();
        try {
            if (isset($request['posterImage']) && isset($request['backdropImage'])) {
                $request['posterId'] = MediaLib::generateImageBase64Resize($request['posterImage']);
                $request['backdropId'] = MediaLib::generateImageBase64Resize($request['backdropImage']);
            } else {
                if (!isset($request['posterImage']) && isset($request['backdropImage']))
                {
                    return $this->fail("", [
                        'Poster field is required'
                    ], 'InvalidRequestError', 412);
                } else if (isset($request['posterImage']) && !isset($request['backdropImage']))
                {
                    return $this->fail("", [
                        'Backdrop field is required'
                    ], 'InvalidRequestError', 412);
                } else {
                    return $this->fail("", [
                        'Poster field is required',
                        'Backdrop field is required',
                    ], 'InvalidRequestError', 412);
                }
            }
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
                "genres"
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
            if (isset($request['posterImage'])) {
                $request['posterId'] = MediaLib::generateImageBase64Resize($request['posterImage']);
            }
            if (isset($request['backdropImage'])) {
                $request['backdropId'] = MediaLib::generateImageBase64Resize($request['backdropImage']);
            }
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
            $data = Movie::findOrFail($id);
            MediaLib::deleteImageResize($data->backdropId);
            MediaLib::deleteImageResize($data->posterId);
            $data->delete();
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
            $upComingMovies = Movie::with("rating", "backdropImage", "genres")->where("status", true)->whereDate('releasedDate', '>',Carbon::now()->toDateString())->get();
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
                "genres"
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
                "genres"
            )->where("status", true)->whereDate('releasedDate', '<=',Carbon::now()->toDateString())->get();
            return $this->success(PhotoResource::collection($nowShowingMovies));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function advertisement()
    {
        try {
            $movies = Movie::with(
                "directors",
                "rating",
                "casts",
                "genres"
            )->where("status", true)->latest()->limit(3)->get();
            return $this->success(PhotoResource::collection($movies));
        } catch (Exception $exception) {
            return $this->fail($exception->getMessage());
        }
    }

    public function movieDetail($id)
    {
        try {
            $movie = Movie::with("directors",
                "rating",
                "casts",
                "genres")->findOrFail($id);
            $cinemaId = Screening::with('theater')->where("movieId", $id)->get()->pluck('theater.cinemaId');
            $cinemas = Cinema::whereIn("id", $cinemaId)->get();
            $cinemas = $cinemas->filter(function ($cinema) use($id) {
                $theaterIds = Theater::where("cinemaId", $cinema->id)->get()->pluck("id");
                $cinema->screenings = collect(Screening::whereIn("theaterId", $theaterIds)
                    ->where("movieId", $id)
                    ->where("date", ">=", Carbon::now()->toDateString())
                    ->where("status", true)
                    ->orderBy("date")
                    ->orderBy("start_time")
                    ->get()
                    ->groupBy("date")->toArray());
                if ($cinema->screenings->count() > 0)
                {
                    return $cinema;
                }
            });
            return $this->success([
                "id" => $movie->id,
                "title" => $movie->title,
                "synopsis" => $movie->synopsis,
                "rating" => $movie->rating->title ?? '',
                'directors' => ListResource::collection($movie->directors),
                'casts' => ListResource::collection($movie->casts),
                'genres' => ListResource::collection($movie->genres),
                "poster" => $movie->poster,
                "backdrop" => $movie->backdrop,
                "trailerUrl" => $movie->trailerUrl,
                "runningTime" => $movie->runningTime,
                "releasedDate" => $movie->releasedDate,
                "cinemas" => ScreeningCinemaResource::collection($cinemas),
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
