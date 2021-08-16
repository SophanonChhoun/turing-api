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
        "id": 5,
        "title": "Luca",
        "synopsis": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
        "rating": "R",
        "directors": [
            {
                "id": 1,
                "name": "Neath Mony"
            },
            {
                "id": 2,
                "name": "Neath Mony"
            },
            {
                "id": 1,
                "name": "Neath Mony"
            },
            {
                "id": 2,
                "name": "Neath Mony"
            }
        ],
        "casts": [
            {
                "id": 1,
                "name": "Neath Mony"
            },
            {
                "id": 2,
                "name": "Neath Mony"
            },
            {
                "id": 1,
                "name": "Neath Mony"
            },
            {
                "id": 2,
                "name": "Neath Mony"
            }
        ],
        "genres": [
            {
                "id": 1,
                "name": "Romance"
            },
            {
                "id": 1,
                "name": "Romance"
            }
        ],
        "poster": "/b38c026db46a7437b38829b292b6db98.png",
        "backdrop": "/89d183a7f7aba4cbd205e434b50b7b47.png",
        "trailerUrl": "https://www.youtube.com/watch?v=mYfJxlgR2jw",
        "screenings": {
            "2021-08-11": [
                {
                    "id": 14,
                    "movieId": 5,
                    "price": 1,
                    "theaterId": 2,
                    "date": "2021-08-11",
                    "start_time": "15:59:00",
                    "status": true,
                    "created_at": "2021-08-10T08:59:59.000000Z",
                    "updated_at": "2021-08-11T03:33:51.000000Z",
                    "cinemaId": 2,
                    "subId": 1,
                    "dubId": 2,
                    "deleted_at": null
                }
            ]
        }
    }
 ]
 *
 * @apiUse ServerServerError
 */
