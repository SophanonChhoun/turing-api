<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoleHasPermission extends Model
{
    use HasFactory;
    protected $fillable = [
      'roleId',
      'permissionId',
      'create',
      'read',
      'update',
      'delete'
    ];

    protected $casts = [
        'create' => 'boolean',
        'read' => 'boolean',
        'update' => 'boolean',
        'delete' => 'boolean',
    ];

    public function getNameAttribute()
    {
        return $this->permission();
    }

    public function permission()
    {
        return $this->belongsTo(Permission::class, 'permissionId', 'id');
    }

    public static function store($id, $permissions){
        RoleHasPermission::where("roleId", $id)->delete();
        foreach($permissions as $permission){
            RoleHasPermission::create([
               'roleId' => $id,
               "permissionId" => $permission['id'],
               "create" => $permission['create'],
               "read" => $permission['read'],
               "delete" => $permission['delete'],
               "update" => $permission['update'],
            ]);
        }
    }
}
