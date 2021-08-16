/**
 * @api {get} /api/movies 1. List Home Screen Movies
 * @apiVersion 1.0.0
 * @apiName List Home Screen Movies
 * @apiGroup Movie
 *
 * @apiUse GetHeaderWithoutAuth
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 {
    "upComingMovies": [
        {
            "id": 6,
            "title": "Luca",
            "synopsis": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
            "poster": "/899f4521b6696ccbd27c4c5745fd4cf3.png",
            "rated": "R",
            "genres": [
                "Romance"
            ]
        }
    ],
    "nowShowingMovies": [
        {
            "id": 1,
            "title": "Luca",
            "synopsis": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
            "poster": "/0d618f1247426e147c0bcea07c920412.png",
            "rated": "R",
            "genres": [
                "Romance",
                "Romance"
            ]
        },
        {
            "id": 3,
            "title": "Lukaku",
            "synopsis": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
            "poster": "/9ea74e626d95907565bd9b770efea257.png",
            "rated": "R",
            "genres": [
                "Romance"
            ]
        },
        {
            "id": 4,
            "title": "Amarsi un po'...",
            "synopsis": "In an accident the young mechanic Marco Coccia meets Cristiana. The two fall in love with one another. Cristiana confesses only later that she is a genuine princess. For Marco it is not a problem, but for Cristiana's parents it is a very big problem. The two must separate. When one evening Cristiana calls Marco and lets him know about her forthcoming wedding, Marco with the car races toward Paris and has an accident...",
            "poster": "/2128f05e206c139de322345264de68a1.png",
            "rated": "R",
            "genres": [
                "Romance"
            ]
        },
        {
            "id": 5,
            "title": "Lucasssxsxs",
            "synopsis": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
            "poster": "/c0960f8e50b73308ae874c1d7c49b8ad.png",
            "rated": "R",
            "genres": [
                "Romance",
                "Romance"
            ]
        }
    ]
 }
 *
 * @apiUse ServerServerError
 */
