<?php

namespace App\Http\Controllers;

use App\Http\Requests\PaymentRequest;
use App\Http\Resources\PaymentResource;
use App\Models\Payment;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB;
use Stripe\Stripe;
use Stripe\StripeClient;
use Illuminate\Support\Facades\Crypt;

class PaymentController extends Controller
{
    public function store(PaymentRequest $request)
    {
        try {
            $stripe = new StripeClient(env('STRIPE_SECRET'));
            $token = $stripe->tokens->create([
                'card' => [
                    'number' => $request->number,
                    'exp_month' => $request->exp_month,
                    'exp_year' => $request->exp_year,
                    'cvc' => $request->cvc,
                ],
            ]);
            $number = Crypt::encrypt($request['number']);
            $cvc = Crypt::encrypt($request['cvc']);
            $data = Payment::create([
               "userId" => auth()->user()->id,
               "cvc" => $cvc,
               "number" => $number,
               "last4" => $token->card->last4,
               "exp_month" => $token->card->exp_month,
               "exp_year" => $token->card->exp_year,
               "fingerprint" => $token->card->fingerprint,
               "brand" => $token->card->brand,
               "country" => $token->card->country,
            ]);
            if (!$data)
            {
                return $this->fail("There is something wrong with insert the card.");
            }
            $data = Payment::where("userId", auth()->user()->id)->get();
            return $this->success(PaymentResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function index()
    {
        try {
            $data = Payment::where("userId", auth()->user()->id)->latest()->get();
            return $this->success(PaymentResource::collection($data));
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            Payment::findOrFail($id)->delete();
            return $this->success([
                'messages' => 'Payment card already deleted.'
            ]);
        }catch (Exception $exception){
            return $this->fail($exception->getMessage());
        }
    }
}
