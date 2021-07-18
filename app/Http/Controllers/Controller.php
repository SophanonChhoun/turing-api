<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Mockery\Exception;


class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function formatValidationErrors(Validator $validator)
    {
        return $validator->errors()->all();
    }
    public function success ($data, $statusCode = 200)
    {

        return response()->json($data, $statusCode);
    }

    public function fail($message = "", $messages = "", $type="ConstraintViolationError", $statusCode = 400)
    {
        return response()->json([
            "type" => $type,
            "message" => $message,
            "messages" => $messages
        ], $statusCode);
    }

}
