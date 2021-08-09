<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Exception;
use Illuminate\Database\Eloquent\SoftDeletes;

class Seat extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $dates = ['deleted_at'];
    protected $fillable = [
        'name',
        'row',
        'col',
        'theaterId',
        'seatTypeId',
        "status",
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    public function seatType()
    {
        return $this->belongsTo(SeatType::class, 'seatTypeId', 'id');
    }

    public function theater()
    {
        return $this->belongsTo(Theater::class, 'id', 'theaterId');
    }

    public static function store($id, $seats)
    {
        try {
            foreach ($seats as $key => $seat)
            {
                $seat['theaterId'] = $id;
                $data = self::create($seat);
                if (!$data)
                {
                    return false;
                }
            }
            return true;
        }catch (Exception $exception){
            return false;
        }
    }

    public static function updateSeat($id, $seats)
    {
        try {
            foreach ($seats as $key => $seat)
            {
                $seat['theaterId'] = $id;
                $data = self::findOrFail($seat['id'])->update($seat);
                if (!$data)
                {
                    return false;
                }
            }
            return true;
        }catch (Exception $exception){
            return false;
        }
    }
}
