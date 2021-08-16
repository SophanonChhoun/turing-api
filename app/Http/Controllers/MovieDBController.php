<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use GuzzleHttp\Client;

class MovieDBController extends Controller
{
    public function searchTmdb(Request $request)
    {
        try {
            $params = [
                'query' => [
                    'api_key' => env('TMDB_API_KEY'),
                    'query' => $request['query']
                ]
            ];
            $client = new Client();
            $res = $client->get('https://api.themoviedb.org/3/search/movie', $params);
            return $this->success(json_decode($res->getBody(), true));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function lookUp($id)
    {
        try {
            $params = [
                'query' => [
                    'api_key' => env('TMDB_API_KEY'),
                ]
            ];
            $client = new Client();
            $res = $client->get('https://api.themoviedb.org/3/movie/' . $id, $params);
            $movie = json_decode($res->getBody());
            $result = $client->get('https://api.themoviedb.org/3/movie/' . $id . '/videos', $params);
            $movie->videos = json_decode($result->getBody());
            return $this->success($movie);
        }catch (Exception $exception) {
            return $this->fail($exception->getMessage());
        }
    }
}
