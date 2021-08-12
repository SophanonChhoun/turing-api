/**
 * @api {post} api/web/tickets 1. Buy Ticket
 * @apiVersion 1.0.0
 * @apiName Buy Ticket
 * @apiGroup Ticket
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
    "screeningId": "7",
    "cinemaName": "Turing Niptict",
    "theatreName": "Hall 3",
    "movieName": "Amarsi un po'...",
    "seats": [
        1,2,3
    ]
 }
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 {
    "message": "Tickets bought successfully."
 }
 *
 * @apiUse NotFound
 * @apiUse ServerServerError
 * @apiUse AuthorizationInvalid
 */

/**
 * @api {get} api/web/tickets 2. List Ticket
 * @apiVersion 1.0.0
 * @apiName List Ticket
 * @apiGroup Ticket
 *
 * @apiUse GetHeader
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 [
     {
        "id": 6,
        "price": 12,
        "movie": "Amarsi un po'...",
        "seat": "A3",
        "cinema": "Turing Niptict",
        "customer": "Sophanon Chhoun",
        "theatre": "Hall 3",
        "checked_in": false
    },
    {
        "id": 7,
        "price": 12,
        "movie": "Amarsi un po'...",
        "seat": "A4",
        "cinema": "Turing Niptict",
        "customer": "Sophanon Chhoun",
        "theatre": "Hall 3",
        "checked_in": false
    },
    {
        "id": 3,
        "price": 12,
        "movie": "Amarsi un po'...",
        "seat": "A1",
        "cinema": "Turing Niptict",
        "customer": "Sophanon Chhoun",
        "theatre": "Hall 3",
        "checked_in": false
    },
    {
        "id": 4,
        "price": 12,
        "movie": "Amarsi un po'...",
        "seat": "A2",
        "cinema": "Turing Niptict",
        "customer": "Sophanon Chhoun",
        "theatre": "Hall 3",
        "checked_in": false
    }
 ]
 *
 * @apiUse ServerServerError
 * @apiUse AuthorizationInvalid
 */

/**
 * @api {get} api/web/tickets/:id 3. Show ticket
 * @apiVersion 1.0.0
 * @apiName Show Ticket
 * @apiGroup Ticket
 *
 * @apiUse GetHeader
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 {
    "id": 6,
    "price": 12,
    "movie": "Amarsi un po'...",
    "seatType": "VIP",
    "seatName": "A3",
    "theaterName": "Hall 3",
    "cinemaName": "Turing Niptict",
    "userName": "Sophanon Chhoun",
    "checked_in": false
 }
 *
 * @apiUse ServerServerError
 * @apiUse AuthorizationInvalid
 */
