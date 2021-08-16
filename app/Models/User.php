<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
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
        'status',
        'media_id',
        'firstName',
        'lastName',
        'phoneNumber'
    ];

    protected $casts = [
        'status' => 'boolean'
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

    public function roles()
    {
        return $this->belongsToMany(Role::class, RoleHasUser::class, 'userId', 'roleId');
    }

    public function getCinemaIdsAttribute()
    {
        return $this->hasCinemas()->pluck("cinemaId");
    }

    public function media()
    {
        return $this->hasOne(MediaFile::class,"media_id","media_id");
    }

    public function hasRoles()
    {
        return $this->hasMany(RoleHasUser::class, "userId");
    }

    public function hasCinemas()
    {
        return $this->hasMany(CinemaHasUser::class, 'userId');
    }

    public function cinemas()
    {
        return $this->belongsToMany(Cinema::class, CinemaHasUser::class, 'userId', 'cinemaId');
    }

    public static function getUserById($id)
    {
        $user = self::with('media')->find($id);
        return $user;
    }

}
