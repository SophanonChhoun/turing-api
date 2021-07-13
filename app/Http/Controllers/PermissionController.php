<?php

namespace App\Http\Controllers;

use App\Http\Resources\PermissionResource;
use App\Models\Permission;
use Illuminate\Http\Request;
use Exception;

class PermissionController extends Controller
{
    public function index()
    {
        try {
            return $this->success(PermissionResource::collection(Permission::all()));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
