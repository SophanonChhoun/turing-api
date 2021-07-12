<?php

namespace App\Core;
use Carbon\Carbon;

class DateLib
{
    public static function getNow(){
        $carbon = Carbon::now()->setTimezone(env('TIME_ZONE', 'Asia/Phnom_Penh'));
        return $carbon;
    }

    public static function getDateFromTimeStamp($value)
    {
        return Carbon::createFromTimestamp($value)
            ->timezone(env('TIME_ZONE', 'Asia/Phnom_Penh'))
            ->toDateTimeString();
    }

    public static function getDateTimeString(){
        return self::getNow()->toDateTimeString();
    }

    public static function getDateFromString($date){
        return Carbon::parse($date)
            ->timezone(env('TIME_ZONE', 'Asia/Phnom_Penh'))
            ->toDateString();
    }

    public static function convertDateFromString($date){
        return Carbon::parse($date)
            ->timezone(env('TIME_ZONE', 'Asia/Phnom_Penh'));
    }

    public static function convertDateStringToTimeStamp($date){
        return Carbon::parse($date)
            ->timezone(env('TIME_ZONE', 'Asia/Phnom_Penh'))
            ->timestamp;
    }

    public static function convertDateToString($date){
        if(!$date) return null;

        return Carbon::parse($date)
            ->timezone(env('TIME_ZONE', 'Asia/Phnom_Penh'))
            ->format('d/m/Y h:i A');
    }

    public static function addMinute($num){
        return self::getNow()->addMinutes($num)->toDateTimeString();
    }

    public static function addMonths($num){
        return self::getNow()->addMonths($num)->toDateTimeString();
    }

    public static function addHours($num){
        return self::getNow()->addHours($num)->toDateTimeString();
    }

    public static function addDays($num){
        return self::getNow()->addDays($num)->toDateTimeString();
    }

    public static function getDateTimeAdminFromCarbon($datetime) {
        if(!$datetime) return null;

        return $datetime->format('Y-m-d H:i');
    }

    public static function getDateTimeAdminFromString($datetime) {
        if(!$datetime) return null;

        return Carbon::parse($datetime)->format('Y-m-d H:i');
    }

    public static function getDateAdminFromCarbon($datetime) {
        if(!$datetime) return null;

        return $datetime->format('Y-m-d');
    }

    public static function getDateAdminFromString($datetime) {
        if(!$datetime) return null;

        return Carbon::parse($datetime)->format('Y-m-d');
    }

    public static function getDateCustomerFromCarbon($datetime) {
        if(!$datetime) return null;

        return $datetime->timestamp;
    }

    public static function getDateCustomerFromString($datetime) {
        if(!$datetime) return null;

        return Carbon::parse($datetime)->timestamp;
    }
}
