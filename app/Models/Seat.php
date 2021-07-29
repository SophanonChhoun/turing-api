<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Exception;

class Seat extends Model
{
    use HasFactory;
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
            self::where('theaterId', $id)->delete();
            foreach ($seats as $key => $seat)
            {
                $data = self::create([
                    "theaterId" => $id,
                    "name" => $seat['name'],
                    "row" => $seat['row'],
                    "col" => $seat['col'],
                    "seatTypeId" => $seat['seatTypeId'],
                    "status" => $seat['status']
                ]);
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
