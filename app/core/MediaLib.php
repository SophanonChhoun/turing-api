<?php

namespace App\Core;
use App\Models\Media;
use App\Models\MediaFile;
use File;
use DB;
use Exception;
use Intervention\Image\ImageManagerStatic;

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

    public static function generateImageBase64Resize($data, $type = 'png')
    {
        $files = [];
        $media_id = null;
        try{
            $file =  md5(microtime()) . '.' . $type;
            $filename  = 'original/' . $file;
            $filenameW154  = 'w154/' . $file;
            $filenameW185  = 'w185/' . $file;
            $filenameW300  = 'w300/' . $file;
            $filenameW500  = 'w500/' . $file;
            $temp = public_path('uploads/images/');
            if($type == 'svg'){
                file_put_contents($temp. $filenameW154,base64_decode(str_replace('data:image/svg+xml;base64,','' , $data)));
                file_put_contents($temp. $filenameW185,base64_decode(str_replace('data:image/svg+xml;base64,','' , $data)));
                file_put_contents($temp. $filenameW300,base64_decode(str_replace('data:image/svg+xml;base64,','' , $data)));
                file_put_contents($temp. $filenameW500,base64_decode(str_replace('data:image/svg+xml;base64,','' , $data)));
                file_put_contents($temp. $filename,base64_decode(str_replace('data:image/svg+xml;base64,','' , $data)));
            } else {
                file_put_contents($temp. $filename, base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $data)));
                file_put_contents($temp. $filenameW154, base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $data)));
                file_put_contents($temp. $filenameW185, base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $data)));
                file_put_contents($temp. $filenameW300, base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $data)));
                file_put_contents($temp. $filenameW500, base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $data)));
            }
            $imageW154 = ImageManagerStatic::make($temp. $filenameW154);
            $imageW154->resize(154, null, function ($constraint) {
                $constraint->aspectRatio();
            })->save();
            $imageW185 = ImageManagerStatic::make($temp. $filenameW185);
            $imageW185->resize(185, null, function ($constraint) {
                $constraint->aspectRatio();
            })->save();
            $imageW300 = ImageManagerStatic::make($temp. $filenameW300);
            $imageW300->resize(300, null, function ($constraint) {
                $constraint->aspectRatio();
            })->save();
            $imageW500 = ImageManagerStatic::make($temp. $filenameW500);
            $imageW500->resize(500, null, function ($constraint) {
                $constraint->aspectRatio();
            })->save();
            $media = Media::create([
                'media_type' => 'image'
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

    public function deleteImage()
    {

    }
}
