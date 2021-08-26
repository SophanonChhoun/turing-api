/**
 * @api {post} /api/web/payments 1. Create Card
 * @apiVersion 1.0.0
 * @apiName Create Card
 * @apiGroup Payment
 *
 * @apiUse PostHeader
 *
 * @apiParam {integer} screeningId     Screening Id
 * @apiParam {string} cinemaName       Cinema Name
 * @apiParam {string} theaterName      Theater Name
 * @apiParam {string} movieName        Movie Name
 * @apiParam {array}  seats            Seats
 *
 * @apiExample {curl} Example usage:
 {
    "number": "4242424242424242",
    "exp_month": 8,
    "exp_year": 2022,
    "cvc": 314
}
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 {
    "id": 4,
    "last4": "4242",
    "brand": "Visa",
    "country": "US",
    "exp_month": 8,
    "exp_year": 2022
 }
 *
 * @apiUse NotFound
 * @apiUse ServerServerError
 * @apiUse AuthorizationInvalid
 */

/**
 * @api {get} /api/web/payments 2. List Payment
 * @apiVersion 1.0.0
 * @apiName List Payment
 * @apiGroup Payment
 *
 * @apiUse GetHeader
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 [
     {
        "id": 1,
        "last4": 4242,
        "brand": "Visa",
        "country": "US",
        "exp_month": 8,
        "exp_year": 2022
    },
    {
        "id": 2,
        "last4": 4242,
        "brand": "Visa",
        "country": "US",
        "exp_month": 8,
        "exp_year": 2022
    },
    {
        "id": 3,
        "last4": 4242,
        "brand": "Visa",
        "country": "US",
        "exp_month": 8,
        "exp_year": 2022
    }
 ]
 *
 * @apiUse ServerServerError
 * @apiUse AuthorizationInvalid
 */

/**
 * @api {delete} /api/web/payments/:id 3. Delete Payment Card
 * @apiVersion 1.0.0
 * @apiName Delete Payment Card
 * @apiGroup Payment
 *
 * @apiUse DeleteHeader
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 {
    "messages": "Payment card already deleted."
 }
 *
 * @apiUse ServerServerError
 * @apiUse AuthorizationInvalid
 */
