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
        "id": 1,
        "name": "Turing CADT",
        "location": "CADT",
        "status": true,
        "mediaId": 3,
        "created_at": "2021-08-03T14:37:38.000000Z",
        "updated_at": "2021-08-03T14:37:38.000000Z",
        "movies": [
            {
                "id": 4,
                "title": "Amarsi un po'...",
                "trailerUrl": "VanCRj8eI9o",
                "synopsis": "In an accident the young mechanic Marco Coccia meets Cristiana. The two fall in love with one another. Cristiana confesses only later that she is a genuine princess. For Marco it is not a problem, but for Cristiana's parents it is a very big problem. The two must separate. When one evening Cristiana calls Marco and lets him know about her forthcoming wedding, Marco with the car races toward Paris and has an accident...",
                "ratedId": 1,
                "runningTime": 93,
                "status": true,
                "releasedDate": "2021-08-11",
                "created_at": "2021-08-05T09:22:12.000000Z",
                "updated_at": "2021-08-12T07:03:21.000000Z",
                "posterId": 35,
                "backdropId": 36,
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
                },
                "directors": [
                    {
                        "id": 1,
                        "firstName": "Neath",
                        "lastName": "Mony",
                        "mediaId": null,
                        "created_at": "2021-08-03T10:08:07.000000Z",
                        "updated_at": "2021-08-03T10:08:07.000000Z",
                        "pivot": {
                            "movieId": 4,
                            "directorId": 1
                        }
                    }
                ],
                "rating": {
                    "id": 1,
                    "title": "R",
                    "description": "Under 17 requires accompanying parent or adult guardian. Contains some adult material. Parents are urged to learn more about the film before taking their young children with them.",
                    "status": true,
                    "created_at": "2021-08-03T15:20:52.000000Z",
                    "updated_at": "2021-08-03T15:20:52.000000Z"
                },
                "casts": [
                    {
                        "id": 1,
                        "firstName": "Neath",
                        "lastName": "Mony",
                        "mediaId": null,
                        "created_at": "2021-08-03T10:08:07.000000Z",
                        "updated_at": "2021-08-03T10:08:07.000000Z",
                        "pivot": {
                            "movieId": 4,
                            "castId": 1
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 1,
                        "name": "Romance",
                        "status": true,
                        "created_at": "2021-08-03T15:20:06.000000Z",
                        "updated_at": "2021-08-10T02:54:21.000000Z",
                        "pivot": {
                            "movieId": 4,
                            "movieGenreId": 1
                        }
                    }
                ]
            }
        ]
    }
 ]
 *
 * @apiUse ServerServerError
 */
