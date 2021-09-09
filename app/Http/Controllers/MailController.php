<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmailRequest;
use App\Http\Requests\UserPasswordRequest;
use App\Mail\SendMail;
use App\Models\Customer;
use App\Models\CustomerResetCode;
use App\Models\ResetCode;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Exception;
use App\Models\User;

class MailController extends Controller
{
    public function sendEmail(EmailRequest $request)
    {
        try {
            $user = User::where("email", $request['email'])->get()->first();
            $code = self::rand_string(8);
            ResetCode::create([
               "userId" => $user->id,
               "code" => $code
            ]);
            $sendmail = Mail::to($request['email'])->send(new SendMail($code, "customer_mail"));
            if (empty($sendmail)) {
                return $this->success([
                    "message" => "Mail Sent Successfully"
                ]);
            }
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function sendEmailCustomer(EmailRequest $request)
    {
        try {
            $user = Customer::where("email", $request['email'])->get()->first();
            $code = self::rand_string(8);
            CustomerResetCode::create([
                "userId" => $user->id,
                "code" => $code
            ]);
            $sendmail = Mail::to($request['email'])->send(new SendMail($code, "customer_mail"));
            if (empty($sendmail)) {
                return $this->success([
                    "message" => "Mail Sent Successfully"
                ]);
            }
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function verifyCode(Request $request)
    {
        try {
            $data = ResetCode::where("code", $request['code'])->where("status", false)->get()->first();
            if (!$data)
            {
                return $this->fail("This code is not exist.");
            }
            ResetCode::findOrFail($data->id)->update([
               "status" => true
            ]);
            return $this->success([
               "userId" => $data->userId
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function verifyCodeCustomer(Request $request)
    {
        try {
            $data = CustomerResetCode::where("code", $request['code'])->where("status", false)->get()->first();
            if (!$data)
            {
                return $this->fail("This code is not exist.");
            }
            CustomerResetCode::findOrFail($data->id)->update([
                "status" => true
            ]);
            return $this->success([
                "userId" => $data->userId
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function updatePassword(UserPasswordRequest $request)
    {
        try {
            User::findOrFail($request['userId'])->update($request->all());
            return $this->success([
               "message" => "Password reset successfully."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function updatePasswordCustomer(UserPasswordRequest $request)
    {
        try {
            Customer::findOrFail($request['userId'])->update($request->all());
            return $this->success([
                "message" => "Password reset successfully."
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    function rand_string( $length ) {
        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return substr(str_shuffle($chars),0,$length);
    }
}
