<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoleHasUser extends Model
{
    use HasFactory;
    protected $fillable = [
      'userId',
      'roleId'
    ];

    public static function store($id, $roles)
    {
        self::where("userId", $id)->delete();
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
