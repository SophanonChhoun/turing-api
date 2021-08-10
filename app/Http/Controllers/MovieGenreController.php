<?php

namespace App\Http\Controllers;

use App\Http\Requests\StatusRequest;
use App\Http\Resources\ListResource;
use Exception;
use App\Models\MovieGenre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Validator;
use App\Http\Requests\MovieGenreRequest;
use App\Http\Resources\MovieGenreListResource;

class MovieGenreController extends Controller
{

    public function index()
    {
        try {
            $MovieGenre = MovieGenre::all();
            return $this->success(MovieGenreListResource::collection($MovieGenre));
        }
        catch (Exception $exception)
        {
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
            try {

                $MovieGenre = MovieGenre::find($id);

                return $this->success([
                    "name" => $MovieGenre->name,
                    "description" => $MovieGenre->description,
                    "status" => $MovieGenre->status,
                ]);

            }catch (Exception $exception){
                return $this->fail($exception->getMessage());
            }

    }

    public function store(MovieGenreRequest $request)
    {
        DB::beginTransaction();

        try {
            $MovieGenre = MovieGenre::create($request->all());
            if(!$MovieGenre)
            {
                DB::rollback();
                return $this->fail('There is something wrong. data store not success');
            }
            DB::commit();

            return response()->json($MovieGenre, 201);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }


    public function update($id, MovieGenreRequest $request)
    {
        DB::beginTransaction();
        try {
            $MovieGenre = MovieGenre::find($id);

            if(!$MovieGenre)
            {
                return $this->fail("Movie Genre not found.", "", "", 404);
            }

            $MovieGenre = $MovieGenre->update($request->all());

            if(!$MovieGenre)
            {
                DB::rollback();
                return $this->fail("There is something wrong");
            }
            DB::commit();

            return $this->success([
                "message" => "Genres updated."
            ], 201);
        }catch (Exception $exception){
            DB::rollback();
            return $this->fail($exception->getMessage());
        }
    }

    public function updateStatus(StatusRequest $request, $id)
    {
        try {
            $MovieGenre = MovieGenre::find($id);
            if(!$MovieGenre)
            {
                return $this->fail("Movie Genre not exist.");
            }
            $MovieGenre = $MovieGenre->update([
                "status" => $request->status
            ]);
            if(!$MovieGenre)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
                "message" => "Movie Genre status updated."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            $MovieGenre = MovieGenre::find($id);
            if(!$MovieGenre)
            {
                return $this->fail("Movie Genre does not exist.");
            }
            $MovieGenre = $MovieGenre->delete();
            if(!$MovieGenre)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success([
               'message' => 'Movie Genre deleted.'
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function listAll()
    {
        try {
            return $this->success(ListResource::collection(MovieGenre::where("status", 1)->get()));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
