<?php

namespace App\Models;

use App\Http\Middleware\Authenticate;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Customer extends Authenticatable
{
    const REFERENCE_SLUG = 'customer';
    use HasFactory, HasApiTokens;

    protected $fillable = [
      'name',
      'email',
      'password',
      'status',
      'media_id',
    ];
    protected $hidden = [
        'password',
        'media_id',
    ];

    /**
     * Encrypt password field.
     *
     * @param string $password
     */
    public function setPasswordAttribute($password)
    {
        if ($password !== null & $password !== '') {
            $this->attributes['password'] = bcrypt($password);
        }
    }

    public function media()
    {
        return $this->hasOne(MediaFile::class,"media_id","media_id");
    }

    public static function getUserById($id)
    {
        $user = self::with('media')->find($id);
        return $user;
    }
}
