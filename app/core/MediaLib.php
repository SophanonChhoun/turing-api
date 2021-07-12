<?php

namespace App\Core;
use App\Models\Media;
use App\Models\MediaFile;
use File;
use Intervention\Image\ImageManagerStatic as Image;
use DB;
use Exception;

class MediaLib
{

    public static function generateImageBase64($data, $type = 'png'){
        $files = [];
        $media_id = null;
        try{
            $filename  = md5(microtime()) . '.' . $type;
            $temp = public_path('uploads/images/');
            if($type == 'svg'){
                file_put_contents($temp. $filename,base64_decode(str_replace('data:image/svg+xml;base64,','' , $data)));
            } else {
                file_put_contents($temp. $filename, base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $data)));
            }
            $media = Media::create([
                'media_type'      => 'image'
            ]);
            $media_id = $media['id'];
            MediaFile::create([
                'media_id' 	=> $media['id'],
                'file_url'	=> '/uploads/images/'. $filename,
                'file_name'	=> $filename,
                'size'		=> 'Original',
            ]);

            return $media_id;
        }catch(Exception $e) {
            return $e->getMessage();
        }
    }

}
