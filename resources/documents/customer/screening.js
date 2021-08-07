/**
 * @api {get} /api/web/screenings/now-showing 1. List Now Showing Screenings
 * @apiVersion 1.0.0
 * @apiName List Now Showing Screenings
 * @apiGroup Screening
 *
 * @apiUse GetHeaderWithoutAuth
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 [
 {
        "id": 4,
        "title": "Amarsi un po'...",
        "trailerUrl": "VanCRj8eI9o",
        "synopsis": "In an accident the young mechanic Marco Coccia meets Cristiana. The two fall in love with one another. Cristiana confesses only later that she is a genuine princess. For Marco it is not a problem, but for Cristiana's parents it is a very big problem. The two must separate. When one evening Cristiana calls Marco and lets him know about her forthcoming wedding, Marco with the car races toward Paris and has an accident...",
        "ratedId": 1,
        "runningTime": 93,
        "status": true,
        "releasedDate": "2021-08-26",
        "created_at": "2021-08-05T09:22:12.000000Z",
        "updated_at": "2021-08-05T09:22:12.000000Z",
        "backdrop": "/1UPzHDjUT40abGPPr4wKxdrX0ar.jpg",
        "poster": "/wHYq4CXe2oSlF3BlxFeFgb8XUW9.jpg",
        "screenings": [
            [
                {
                    "id": 7,
                    "movieId": 4,
                    "price": 10,
                    "theaterId": 1,
                    "date": "2021-08-07",
                    "start_time": "09:33:00",
                    "status": true,
                    "created_at": "2021-08-07T02:34:11.000000Z",
                    "updated_at": "2021-08-07T02:34:11.000000Z",
                    "cinemaId": 2,
                    "subId": 1,
                    "dubId": 2
                },
                {
                    "id": 8,
                    "movieId": 4,
                    "price": 100,
                    "theaterId": 1,
                    "date": "2021-08-07",
                    "start_time": "11:33:00",
                    "status": true,
                    "created_at": "2021-08-07T02:34:11.000000Z",
                    "updated_at": "2021-08-07T02:34:11.000000Z",
                    "cinemaId": 2,
                    "subId": 1,
                    "dubId": 2
                },
                {
                    "id": 5,
                    "movieId": 4,
                    "price": 5,
                    "theaterId": 1,
                    "date": "2021-08-07",
                    "start_time": "12:24:00",
                    "status": true,
                    "created_at": "2021-08-05T14:25:33.000000Z",
                    "updated_at": "2021-08-05T15:03:27.000000Z",
                    "cinemaId": 2,
                    "subId": 1,
                    "dubId": 2
                }
            ],
            [
                {
                    "id": 9,
                    "movieId": 4,
                    "price": 100,
                    "theaterId": 1,
                    "date": "2021-08-08",
                    "start_time": "09:34:00",
                    "status": true,
                    "created_at": "2021-08-07T02:34:11.000000Z",
                    "updated_at": "2021-08-07T02:34:11.000000Z",
                    "cinemaId": 2,
                    "subId": 1,
                    "dubId": 2
                }
            ]
        ]
    }
 ]
 *
 * @apiUse ServerServerError
 */
