<?php

namespace App\Http\Controllers;

use App\Core\MediaLib;
use App\Http\Requests\MovieRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\ListTitleResource;
use App\Http\Resources\MovieCustomerResource;
use App\Http\Resources\MovieResource;
use App\Models\Movie;
use App\Models\MovieCast;
use App\Models\MovieDirector;
use App\Models\MovieGenre;
use App\Models\MovieGenreHasMovie;
use App\Models\MovieRating;
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
            if(isset($request['poster']) && isset($request['backdrop'])  && !empty($request['poster'])  && !empty($request['backdrop']))
            {
                $request['mediaId'] = MediaLib::generateImageBase64($request['poster']);
                $request['backdrop'] = MediaLib::generateImageBase64($request['backdrop']);
            }else{
                return $this->fail("", [
                    "poster field is required.",
                    "backdrop field is required."
                ], "InvalidRequestError", 412);
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
            $data = Movie::with("rating", "media", "backdropImage", "genres", "directors", "casts")->latest()->get();
            return $this->success(MovieResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $data = Movie::with(
                "movieDirectors",
                "movieCasts",
                "movieGenres",
                "media",
                "backdropImage",
            )->findOrFail($id);
            return $this->success([
                "id" => $data->id,
                "title" => $data->title,
                "releasedDate" => $data->releasedDate,
                "synopsis" => $data->synopsis,
                "ratedId" => $data->ratedId,
                "trailerUrl" => $data->trailerUrl,
                "runningTime" => $data->runningTime,
                "poster" => $data->media->file_url ?? '',
                "backdrop" => $data->backdropImage->file_url ?? '',
                "movieDirectors" => $data->movieDirectors->pluck("directorId") ?? '',
                "movieCasts" => $data->movieCasts->pluck("castId") ?? '',
                "movieGenres" => $data->movieGenres->pluck("movieGenreId") ?? '',
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
            if(isset($request['poster']) && isset($request['backdrop']))
            {
                $request['mediaId'] = MediaLib::generateImageBase64($request['poster']);
                $request['backdrop'] = MediaLib::generateImageBase64($request['backdrop']);
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

    public function showUpComingMovie()
    {
        try {
            $upComingMovies = Movie::with("rating", "media", "backdropImage", "genres")->where("status", true)->whereDate('releasedDate', '>',Carbon::now()->toDateString())->limit(10)->get();
            $nowShowingMovies = Movie::where("status", true)->whereDate('releasedDate', '<=',Carbon::now()->toDateString())->limit(5)->get();
            return $this->success([
                'upComingMovies' => MovieCustomerResource::collection($upComingMovies),
                'nowShowingMovies' => MovieCustomerResource::collection($nowShowingMovies)
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
