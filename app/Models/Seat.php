<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Exception;
use Illuminate\Database\Eloquent\SoftDeletes;

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

    public static function getGrid($row, $col, $id, $seats, $screening)
    {
        for ($i=0; $i < $row; $i++) {
            for ($j=0; $j < $col; $j++) {
                $grid[$i][$j] = null;
            }
        }
        foreach ($seats as $key => $seat) {
            $avaliable = Ticket::where("seatId", $seat->id)->where("screeningId", $id)->get()->first();
            $grid[$seat->row][$seat->col] = [
                "id" => $seat->id,
                "name" => $seat->name,
                "seatType" => $seat->seatType,
                "status" => $seat->status,
                "booked" => $avaliable ? true : false,
                "price" => round((($seat->seatType ? $seat->seatType->priceFactor : 1) * $screening->price), 3),
                "col" => $seat->col,
                "row" => $seat->row
            ];
        }
        return $grid;
    }

    public static function getSeats($row, $col, $seats)
    {
        for ($i=0; $i < $row; $i++) {
            for ($j=0; $j < $col; $j++) {
                $grid[$i][$j] = null;
            }
        }
        foreach ($seats as $key => $seat) {
            $grid[$seat->row][$seat->col] = [
                "id" => $seat->id,
                "name" => $seat->name,
                "seatType" => $seat->seatType,
                "status" => $seat->status,
            ];
        }
        return $grid;
    }
}
