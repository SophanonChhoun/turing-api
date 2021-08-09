<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Role extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $dates = ['deleted_at'];
    protected $fillable = [
      'name',
      'defaultRole',
      'description',
      'status'
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    public function rolePermission()
    {
        return $this->hasMany(RoleHasPermission::class, "roleId");
    }
}
