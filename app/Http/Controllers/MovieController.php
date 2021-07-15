<?php

namespace App\Http\Controllers;

use App\Core\MediaLib;
use App\Http\Requests\MovieRequest;
use App\Models\Movie;
use App\Models\MovieCast;
use App\Models\MovieDirector;
use App\Models\MovieGenre;
use App\Models\MovieGenreHasMovie;
use Illuminate\Http\Request;
use DB;
use Exception;

class MovieController extends Controller
{
    public function store(MovieRequest $request)
    {
        DB::beginTransaction();
        try {
            if(isset($request['poster']) && isset($request['backdrop']))
            {
                $request['mediaId'] = MediaLib::generateImageBase64($request['poster']);
                $request['backdrop'] = MediaLib::generateImageBase64($request['backdrop']);
            }else{
                return $this->fail([
                    "poster field is required.",
                    "backdrop field is required."
                ]);
            }

            $movie = Movie::create($request->all());
            $cast = MovieCast::store($movie->id, $request['movieCast']);
            $directors = MovieDirector::store($movie->id, $request['movieDirector']);
            $genres = MovieGenreHasMovie::store($movie->id, $request['movieGenre']);
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
}
