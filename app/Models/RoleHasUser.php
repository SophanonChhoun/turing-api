<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RoleHasUser extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $dates = ['deleted_at'];
    protected $fillable = [
      'userId',
      'roleId'
    ];

    public static function store($id, $roles)
    {
        self::where("userId", $id)->forceDelete();
        foreach ($roles as $key => $role)
        {
            $data = self::create([
                "userId" => $id,
                "roleId" => $role
            ]);
            if(!$data)
            {
                return false;
            }
        }

        return true;
    }
}
