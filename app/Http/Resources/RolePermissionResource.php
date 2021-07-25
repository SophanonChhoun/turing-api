<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RolePermissionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'permissionId' => $this->permissionId,
            'name' => $this->permission->name ?? '',
            'read' => $this->read,
            'create' => $this->create,
            'delete' => $this->delete,
            'update' => $this->update
        ];
    }
}
