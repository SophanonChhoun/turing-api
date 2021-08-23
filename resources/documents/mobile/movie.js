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
            "poster": "/899f4521b6696ccbd27c4c5745fd4cf3.png",
            "backdrop": "/71470b1e77cbd9924953eba0c229522c.png",
            "title": "Luca",
            "trailerUrl": "https://www.youtube.com/watch?v=mYfJxlgR2jw",
            "synopsis": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
            "runningTime": 95,
            "directors": [
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
                }
            ],
            "genres": [
                {
                    "id": 1,
                    "name": "Romance"
                }
            ],
            "rating": "R",
            "releasedDate": "2021-12-17"
        },
        {
            "id": 7,
            "poster": "/59b519d22a4171d75e04ea3311878a54.png",
            "backdrop": "/c755eefeddf1fab11f2294ef2f345336.png",
            "title": "Luca",
            "trailerUrl": "https://www.youtube.com/watch?v=mYfJxlgR2jw",
            "synopsis": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
            "runningTime": 95,
            "directors": [
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
                }
            ],
            "genres": [
                {
                    "id": 1,
                    "name": "Romance"
                }
            ],
            "rating": "R",
            "releasedDate": "2021-12-17"
        }
    ],
    "nowShowingMovies": [
        {
            "id": 1,
            "poster": "/0d618f1247426e147c0bcea07c920412.png",
            "backdrop": "/7de5dc0c0bed4a405809f6f26c79cda8.png",
            "title": "Luca",
            "trailerUrl": "https://www.youtube.com/watch?v=mYfJxlgR2jw",
            "synopsis": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
            "runningTime": 95,
            "directors": [
                {
                    "id": 1,
                    "name": "Neath Mony"
                },
                {
                    "id": 1,
                    "name": "Neath Mony"
                },
                {
                    "id": 2,
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
            "rating": "R",
            "releasedDate": "2021-06-17"
        },
        {
            "id": 2,
            "poster": "/1f417a432dcd49a9f2297ec278e80dc6.png",
            "backdrop": "/40022a33913ca291a91c85d24fad811a.png",
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
                    "name": "Romance"
                }
            ],
            "rating": "R",
            "releasedDate": "2021-08-04"
        },
        {
            "id": 3,
            "poster": "/9ea74e626d95907565bd9b770efea257.png",
            "backdrop": "/c8f79dd02476e1af6e9afca58c9d16e7.png",
            "title": "Lukaku",
            "trailerUrl": "https://www.youtube.com/watch?v=mYfJxlgR2jw",
            "synopsis": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
            "runningTime": 95,
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
            "rating": "R",
            "releasedDate": "2021-06-17"
        },
        {
            "id": 4,
            "poster": "/2128f05e206c139de322345264de68a1.png",
            "backdrop": "/324b32eb18b57269835c435fb9c5242a.png",
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
                    "name": "Romance"
                }
            ],
            "rating": "R",
            "releasedDate": "2021-08-11"
        },
        {
            "id": 5,
            "poster": "/c0960f8e50b73308ae874c1d7c49b8ad.png",
            "backdrop": "/b963fce06546cdf2bf018db1daff6ed1.png",
            "title": "Lucasssxsxs",
            "trailerUrl": "https://www.youtube.com/watch?v=mYfJxlgR2jw",
            "synopsis": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
            "runningTime": 95,
            "directors": [
                {
                    "id": 1,
                    "name": "Neath Mony"
                },
                {
                    "id": 1,
                    "name": "Neath Mony"
                },
                {
                    "id": 2,
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
            "rating": "R",
            "releasedDate": "2021-06-17"
        }
    ],
    "advertisements": [
        {
            "id": 7,
            "poster": "/59b519d22a4171d75e04ea3311878a54.png",
            "backdrop": "/c755eefeddf1fab11f2294ef2f345336.png",
            "title": "Luca",
            "trailerUrl": "https://www.youtube.com/watch?v=mYfJxlgR2jw",
            "synopsis": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
            "runningTime": 95,
            "directors": [
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
                }
            ],
            "genres": [
                {
                    "id": 1,
                    "name": "Romance"
                }
            ],
            "rating": "R",
            "releasedDate": "2021-12-17"
        },
        {
            "id": 6,
            "poster": "/899f4521b6696ccbd27c4c5745fd4cf3.png",
            "backdrop": "/71470b1e77cbd9924953eba0c229522c.png",
            "title": "Luca",
            "trailerUrl": "https://www.youtube.com/watch?v=mYfJxlgR2jw",
            "synopsis": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
            "runningTime": 95,
            "directors": [
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
                }
            ],
            "genres": [
                {
                    "id": 1,
                    "name": "Romance"
                }
            ],
            "rating": "R",
            "releasedDate": "2021-12-17"
        },
        {
            "id": 5,
            "poster": "/c0960f8e50b73308ae874c1d7c49b8ad.png",
            "backdrop": "/b963fce06546cdf2bf018db1daff6ed1.png",
            "title": "Lucasssxsxs",
            "trailerUrl": "https://www.youtube.com/watch?v=mYfJxlgR2jw",
            "synopsis": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
            "runningTime": 95,
            "directors": [
                {
                    "id": 1,
                    "name": "Neath Mony"
                },
                {
                    "id": 1,
                    "name": "Neath Mony"
                },
                {
                    "id": 2,
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
            "rating": "R",
            "releasedDate": "2021-06-17"
        }
    ]
 }
 *
 * @apiUse ServerServerError
 */
