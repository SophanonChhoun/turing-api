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
        "id": "3312f5ec-425b-4db3-b9a5-824a88010391",
        "price": 12,
        "seat": "A2",
        "customer": "Customer walk in",
        "theatre": "Hall 3",
        "checkedIn": false,
        "movie": {
            "id": 4,
            "title": "Amarsi un po'...",
            "trailer": "VanCRj8eI9o",
            "synopsis": "In an accident the young mechanic Marco Coccia meets Cristiana. The two fall in love with one another. Cristiana confesses only later that she is a genuine princess. For Marco it is not a problem, but for Cristiana's parents it is a very big problem. The two must separate. When one evening Cristiana calls Marco and lets him know about her forthcoming wedding, Marco with the car races toward Paris and has an accident...",
            "rating": "R",
            "genres": [
                {
                    "id": 1,
                    "name": "Romance"
                }
            ],
            "directors": [
                {
                    "id": 1,
                    "name": "Neath Mony"
                }
            ],
            "casts": [
                {
                    "id": 1,
                    "name": "Neath Mony"
                }
            ],
            "releasedDate": "2021-08-11",
            "poster": "/2128f05e206c139de322345264de68a1.png",
            "backdrop": "/324b32eb18b57269835c435fb9c5242a.png"
        },
        "screening": {
            "id": 7,
            "theatre": "Hall 3",
            "date": "2021-08-30",
            "start_time": "09:33:00"
        },
        "cinema": {
            "id": 1,
            "name": "Turing CADT",
            "location": "CADT",
            "photo": "http://127.0.0.1:8000/uploads/images/a2f3f14884bf61d0a9bea8b437d273bf.png"
        }
    },
 {
        "id": "57250088-3cb5-4fdf-9529-c0103536ccfb",
        "price": 12,
        "seat": "A1",
        "customer": "Customer walk in",
        "theatre": "Hall 3",
        "checkedIn": false,
        "movie": {
            "id": 4,
            "title": "Amarsi un po'...",
            "trailer": "VanCRj8eI9o",
            "synopsis": "In an accident the young mechanic Marco Coccia meets Cristiana. The two fall in love with one another. Cristiana confesses only later that she is a genuine princess. For Marco it is not a problem, but for Cristiana's parents it is a very big problem. The two must separate. When one evening Cristiana calls Marco and lets him know about her forthcoming wedding, Marco with the car races toward Paris and has an accident...",
            "rating": "R",
            "genres": [
                {
                    "id": 1,
                    "name": "Romance"
                }
            ],
            "directors": [
                {
                    "id": 1,
                    "name": "Neath Mony"
                }
            ],
            "casts": [
                {
                    "id": 1,
                    "name": "Neath Mony"
                }
            ],
            "releasedDate": "2021-08-11",
            "poster": "/2128f05e206c139de322345264de68a1.png",
            "backdrop": "/324b32eb18b57269835c435fb9c5242a.png"
        },
        "screening": {
            "id": 7,
            "theatre": "Hall 3",
            "date": "2021-08-30",
            "start_time": "09:33:00"
        },
        "cinema": {
            "id": 1,
            "name": "Turing CADT",
            "location": "CADT",
            "photo": "http://127.0.0.1:8000/uploads/images/a2f3f14884bf61d0a9bea8b437d273bf.png"
        }
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
