/**
 * @api {get} /api/web/movies/upcoming 1. List Upcoming movies
 * @apiVersion 1.0.0
 * @apiName List Upcoming movies
 * @apiGroup Movie
 *
 * @apiUse GetHeaderWithoutAuth
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 [
    {
        "id": 4,
        "poster": "/wHYq4CXe2oSlF3BlxFeFgb8XUW9.jpg",
        "backdrop": "/1UPzHDjUT40abGPPr4wKxdrX0ar.jpg",
        "title": "Amarsi un po'...",
        "trailerUrl": "VanCRj8eI9o",
        "synopsis": "In an accident the young mechanic Marco Coccia meets Cristiana. The two fall in love with one another. Cristiana confesses only later that she is a genuine princess. For Marco it is not a problem, but for Cristiana's parents it is a very big problem. The two must separate. When one evening Cristiana calls Marco and lets him know about her forthcoming wedding, Marco with the car races toward Paris and has an accident...",
        "runningTime": 93,
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
        "genres": [
            {
                "id": 1,
                "name": "Action"
            }
        ]
    }
 ]
 *
 * @apiUse ServerServerError
 */

/**
 * @api {get} /api/web/movies/now-showing 2. List Now Showing Movies
 * @apiVersion 1.0.0
 * @apiName List Now showing movies
 * @apiGroup Movie
 *
 * @apiUse GetHeaderWithoutAuth
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 [
 {
        "id": 1,
        "poster": "/n5Re2ywnpqwAXTin8W5j3lqSwc7.jpg",
        "backdrop": "/o2SeAw8ARPB1D8oudCRJcxW3w60.jpg",
        "title": "Wrong Turn 2: Dead End",
        "trailerUrl": "VanCRj8eI9o",
        "synopsis": "Retired military commander Colonel Dale Murphy hosts the simulated post-apocalyptic reality show where participants are challenged to survive a remote West Virginia wasteland. But the show turns into a nightmarish showdown when each realizes they are being hunted by an inbred family of cannibals determined to make them all dinner!",
        "runningTime": 96,
        "directors": [
            {
                "id": 2,
                "name": "Neath Mony"
            }
        ],
        "casts": [
            {
                "id": 1,
                "name": "Neath Mony"
            }
        ],
        "genres": [
            {
                "id": 1,
                "name": "Action"
            }
        ]
    },
 {
        "id": 2,
        "poster": "/maqsygPJvhESIOQGclUAEEWxNC.jpg",
        "backdrop": "/9Ef8abhHjuqyCNlhscEohNXsLJj.jpg",
        "title": "Tod@s Caen",
        "trailerUrl": "SeCXaQuFAn0",
        "synopsis": "A pair of seducers try to prove who has the best techniques while trying not to fall in love with each other.",
        "runningTime": 120,
        "directors": [
            {
                "id": 1,
                "name": "Neath Mony"
            }
        ],
        "casts": [
            {
                "id": 2,
                "name": "Neath Mony"
            }
        ],
        "genres": [
            {
                "id": 1,
                "name": "Action"
            }
        ]
    },
 {
        "id": 3,
        "poster": "/k9lhZ0PhY78nzwG034rNpsLXlpW.jpg",
        "backdrop": "/3Ywbn6XkpBBemuoThyUwr0opLmG.jpg",
        "title": "L'ennemi public n°1",
        "trailerUrl": "XgYzDUhoah0",
        "synopsis": "The story of Jacques Mesrine, France's public enemy No. 1 during the 1970s. After nearly two decades of legendary criminal feats -- from multiple bank robberies and to prison breaks -- Mesrine was gunned down by the French police in Paris.",
        "runningTime": 133,
        "directors": [
            {
                "id": 1,
                "name": "Neath Mony"
            }
        ],
        "casts": [
            {
                "id": 2,
                "name": "Neath Mony"
            }
        ],
        "genres": [
            {
                "id": 1,
                "name": "Action"
            }
        ]
    }
 ]
 *
 * @apiUse ServerServerError
 */

/**
 * @api {get} /api/web/movies/advertisement 3. List advertisement movie
 * @apiVersion 1.0.0
 * @apiName List advertisement movie
 * @apiGroup Movie
 *
 * @apiUse GetHeaderWithoutAuth
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 [
 {
        "id": 4,
        "poster": "/wHYq4CXe2oSlF3BlxFeFgb8XUW9.jpg",
        "backdrop": "/1UPzHDjUT40abGPPr4wKxdrX0ar.jpg",
        "title": "Amarsi un po'...",
        "trailerUrl": "VanCRj8eI9o",
        "synopsis": "In an accident the young mechanic Marco Coccia meets Cristiana. The two fall in love with one another. Cristiana confesses only later that she is a genuine princess. For Marco it is not a problem, but for Cristiana's parents it is a very big problem. The two must separate. When one evening Cristiana calls Marco and lets him know about her forthcoming wedding, Marco with the car races toward Paris and has an accident...",
        "runningTime": 93,
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
        "genres": [
            {
                "id": 1,
                "name": "Action"
            }
        ]
    },
    {
        "id": 3,
        "poster": "/k9lhZ0PhY78nzwG034rNpsLXlpW.jpg",
        "backdrop": "/3Ywbn6XkpBBemuoThyUwr0opLmG.jpg",
        "title": "L'ennemi public n°1",
        "trailerUrl": "XgYzDUhoah0",
        "synopsis": "The story of Jacques Mesrine, France's public enemy No. 1 during the 1970s. After nearly two decades of legendary criminal feats -- from multiple bank robberies and to prison breaks -- Mesrine was gunned down by the French police in Paris.",
        "runningTime": 133,
        "directors": [
            {
                "id": 1,
                "name": "Neath Mony"
            }
        ],
        "casts": [
            {
                "id": 2,
                "name": "Neath Mony"
            }
        ],
        "genres": [
            {
                "id": 1,
                "name": "Action"
            }
        ]
    },
    {
        "id": 2,
        "poster": "/maqsygPJvhESIOQGclUAEEWxNC.jpg",
        "backdrop": "/9Ef8abhHjuqyCNlhscEohNXsLJj.jpg",
        "title": "Tod@s Caen",
        "trailerUrl": "SeCXaQuFAn0",
        "synopsis": "A pair of seducers try to prove who has the best techniques while trying not to fall in love with each other.",
        "runningTime": 120,
        "directors": [
            {
                "id": 1,
                "name": "Neath Mony"
            }
        ],
        "casts": [
            {
                "id": 2,
                "name": "Neath Mony"
            }
        ],
        "genres": [
            {
                "id": 1,
                "name": "Action"
            }
        ]
    }
 ]
 *
 * @apiUse ServerServerError
 */

/**
 * @api {get} /api/web/movies/:id 4. Movies Detail
 * @apiVersion 1.0.0
 * @apiName List Movie Detail
 * @apiGroup Movie
 *
 * @apiUse GetHeaderWithoutAuth
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 {
    "id": 4,
    "title": "Amarsi un po'...",
    "synopsis": "In an accident the young mechanic Marco Coccia meets Cristiana. The two fall in love with one another. Cristiana confesses only later that she is a genuine princess. For Marco it is not a problem, but for Cristiana's parents it is a very big problem. The two must separate. When one evening Cristiana calls Marco and lets him know about her forthcoming wedding, Marco with the car races toward Paris and has an accident...",
    "rated": "R",
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
    "genres": [
        {
            "id": 1,
            "name": "Action"
        }
    ],
    "poster": "/wHYq4CXe2oSlF3BlxFeFgb8XUW9.jpg",
    "backdrop": "/1UPzHDjUT40abGPPr4wKxdrX0ar.jpg",
    "trailerUrl": "VanCRj8eI9o",
    "cinemas": [
        {
            "id": 2,
            "name": "Turing Niptict",
            "location": "Niptict",
            "screening": [
                [
                    {
                        "id": 7,
                        "movieId": 4,
                        "price": 10,
                        "theaterId": 2,
                        "date": "2021-08-09",
                        "start_time": "09:33:00",
                        "status": true,
                        "created_at": "2021-08-07T02:34:11.000000Z",
                        "updated_at": "2021-08-09T03:24:37.000000Z",
                        "cinemaId": 2,
                        "subId": 1,
                        "dubId": 2,
                        "deleted_at": null
                    }
                ]
            ]
        }
    ]
 }
 *
 * @apiUse NotFound
 * @apiUse ServerServerError
 */
