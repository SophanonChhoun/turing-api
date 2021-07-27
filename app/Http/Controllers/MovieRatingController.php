<?php

namespace App\Http\Controllers;

use App\Http\Requests\MovieRatingRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\ListResource;
use App\Http\Resources\ListTitleResource;
use App\Http\Resources\MovieRatingResource;
use App\Models\MovieRating;
use Illuminate\Http\Request;
use Exception;

class MovieRatingController extends Controller
{
    public function store(MovieRatingRequest $request)
    {
        try {
            $data = MovieRating::create($request->all());
            if (!$data) {
                return $this->fail("Something went wrong.");
            }
            return $this->success($data);
        } catch (Exception $exception) {
            return $this->fail($exception->getMessage());
        }
    }

    public function index()
    {
        try {
            $data = MovieRating::latest()->get();
            return $this->success(MovieRatingResource::collection($data));
        } catch (Exception $exception) {
            return $this->fail($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $movieRating = MovieRating::findOrFail($id);
            return $this->success([
               "id" => $movieRating->id,
               "title" => $movieRating->title,
                "description" => $movieRating->description
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function update($id, MovieRatingRequest $request)
    {
        try {
            $data = MovieRating::findOrFail($id);
            $data = $data->update($request->all());
            if (!$data)
            {
                return $this->fail("Something went wrong");
            }
            return $this->success($data);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function updateStatus($id, StatusRequest $request)
    {
        try {
            MovieRating::findOrFail($id)->update($request->all());
            return $this->success([
               "message" => "Movie Rating status updated."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            MovieRating::findOrFail($id)->delete();
            return $this->success([
               "message" => "Movie Rating deleted."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function listAll()
    {
        try {
            $data = MovieRating::where("status", true)->get();
            return $this->success(ListTitleResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
