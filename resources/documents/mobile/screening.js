/**
 * @api {get} /api/screenings/now-showing 1. List Now Showing Screenings
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
        "id": 1,
        "name": "Turing CADT",
        "location": "CADT",
        "photo": "http://127.0.0.1:8000/uploads/images/a2f3f14884bf61d0a9bea8b437d273bf.png",
        "movies": [
            {
                "id": 4,
                "title": "Amarsi un po'...",
                "trailerUrl": "VanCRj8eI9o",
                "synopsis": "In an accident the young mechanic Marco Coccia meets Cristiana. The two fall in love with one another. Cristiana confesses only later that she is a genuine princess. For Marco it is not a problem, but for Cristiana's parents it is a very big problem. The two must separate. When one evening Cristiana calls Marco and lets him know about her forthcoming wedding, Marco with the car races toward Paris and has an accident...",
                "runningTime": 93,
                "rating": "R",
                "poster": "/2128f05e206c139de322345264de68a1.png",
                "backdrop": "/324b32eb18b57269835c435fb9c5242a.png",
                "casts": [
                    {
                        "id": 1,
                        "name": "Neath Mony"
                    }
                ],
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
                "screenings": {
                    "2021-08-30": [
                        {
                            "id": 7,
                            "movieId": 4,
                            "price": 10,
                            "theaterId": 2,
                            "date": "2021-08-30",
                            "start_time": "09:33:00",
                            "status": true,
                            "created_at": "2021-08-07T02:34:11.000000Z",
                            "updated_at": "2021-08-12T07:02:57.000000Z",
                            "subId": 1,
                            "dubId": 2
                        }
                    ]
                }
            }
        ]
    }
 ]
 *
 * @apiUse ServerServerError
 */
