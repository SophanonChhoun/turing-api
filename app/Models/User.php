<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, HasApiTokens;
    protected $table = 'users';

    protected $fillable = [
        'email',
        'name',
        'password',
        'is_enable',
        'media_id',
        'cinema_id',
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
