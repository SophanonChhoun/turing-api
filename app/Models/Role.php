<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    protected $fillable = [
      'name',
      'defaultRole',
      'description',
      'status'
    ];

    public function rolePermission()
    {
        return $this->hasMany(RoleHasPermission::class, "roleId");
    }
}
