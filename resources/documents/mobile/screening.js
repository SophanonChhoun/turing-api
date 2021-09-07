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
 {
    "screeningTimes": [
        "2021-09-09",
        "2021-09-10",
        "2021-09-11"
    ],
    "cinemas": [
        {
            "id": 1,
            "name": "Turing CADT",
            "location": "CADT",
            "photo": "http://127.0.0.1:8000/uploads/images/a2f3f14884bf61d0a9bea8b437d273bf.png",
            "movies": [
                {
                    "id": 3,
                    "title": "Lukaku",
                    "trailerUrl": "https://www.youtube.com/watch?v=mYfJxlgR2jw",
                    "synopsis": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
                    "runningTime": 95,
                    "rating": "R",
                    "poster": "/9ea74e626d95907565bd9b770efea257.png",
                    "backdrop": "/c8f79dd02476e1af6e9afca58c9d16e7.png",
                    "casts": [
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
                        }
                    ],
                    "directors": [
                        {
                            "id": 1,
                            "name": "Neath Mony"
                        }
                    ],
                    "screenings": {
                        "2021-09-09": [
                            {
                                "id": 21,
                                "movieId": 3,
                                "price": 3,
                                "theaterId": 2,
                                "date": "2021-09-09",
                                "start_time": "20:00:00",
                                "status": true,
                                "created_at": "2021-09-07T02:00:08.000000Z",
                                "updated_at": "2021-09-07T02:00:08.000000Z",
                                "subId": 1,
                                "dubId": 1
                            },
                            {
                                "id": 22,
                                "movieId": 3,
                                "price": 3,
                                "theaterId": 2,
                                "date": "2021-09-09",
                                "start_time": "23:00:00",
                                "status": true,
                                "created_at": "2021-09-07T02:13:32.000000Z",
                                "updated_at": "2021-09-07T02:13:32.000000Z",
                                "subId": 1,
                                "dubId": 1
                            }
                        ],
                        "2021-09-10": [
                            {
                                "id": 23,
                                "movieId": 3,
                                "price": 3,
                                "theaterId": 2,
                                "date": "2021-09-10",
                                "start_time": "23:00:00",
                                "status": true,
                                "created_at": "2021-09-07T02:13:46.000000Z",
                                "updated_at": "2021-09-07T02:13:46.000000Z",
                                "subId": 1,
                                "dubId": 1
                            }
                        ]
                    }
                }
            ]
        },
        {
            "id": 2,
            "name": "Turing Niptict",
            "location": "Niptict",
            "photo": "http://127.0.0.1:8000/uploads/images/c983b6c44b15235e2c93aca24af01f8a.png",
            "movies": [
                {
                    "id": 1,
                    "title": "Luca",
                    "trailerUrl": "https://www.youtube.com/watch?v=mYfJxlgR2jw",
                    "synopsis": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
                    "runningTime": 95,
                    "rating": "R",
                    "poster": "/0d618f1247426e147c0bcea07c920412.png",
                    "backdrop": "/7de5dc0c0bed4a405809f6f26c79cda8.png",
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
                    "screenings": {
                        "2021-09-09": [
                            {
                                "id": 26,
                                "movieId": 1,
                                "price": 3,
                                "theaterId": 1,
                                "date": "2021-09-09",
                                "start_time": "23:00:00",
                                "status": true,
                                "created_at": "2021-09-07T02:24:06.000000Z",
                                "updated_at": "2021-09-07T02:24:06.000000Z",
                                "subId": 1,
                                "dubId": 1
                            }
                        ]
                    }
                },
                {
                    "id": 3,
                    "title": "Lukaku",
                    "trailerUrl": "https://www.youtube.com/watch?v=mYfJxlgR2jw",
                    "synopsis": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
                    "runningTime": 95,
                    "rating": "R",
                    "poster": "/9ea74e626d95907565bd9b770efea257.png",
                    "backdrop": "/c8f79dd02476e1af6e9afca58c9d16e7.png",
                    "casts": [
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
                        }
                    ],
                    "directors": [
                        {
                            "id": 1,
                            "name": "Neath Mony"
                        }
                    ],
                    "screenings": {
                        "2021-09-10": [
                            {
                                "id": 24,
                                "movieId": 3,
                                "price": 3,
                                "theaterId": 1,
                                "date": "2021-09-10",
                                "start_time": "23:00:00",
                                "status": true,
                                "created_at": "2021-09-07T02:21:26.000000Z",
                                "updated_at": "2021-09-07T02:21:26.000000Z",
                                "subId": 1,
                                "dubId": 1
                            }
                        ],
                        "2021-09-11": [
                            {
                                "id": 25,
                                "movieId": 3,
                                "price": 3,
                                "theaterId": 1,
                                "date": "2021-09-11",
                                "start_time": "23:00:00",
                                "status": true,
                                "created_at": "2021-09-07T02:21:30.000000Z",
                                "updated_at": "2021-09-07T02:21:30.000000Z",
                                "subId": 1,
                                "dubId": 1
                            }
                        ]
                    }
                }
            ]
        }
    ]
}
 *
 * @apiUse ServerServerError
 */
