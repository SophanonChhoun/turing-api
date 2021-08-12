/**
 * @api {get} /api/web/grid/:screening_id 1. List Grid
 * @apiVersion 1.0.0
 * @apiName List Grid
 * @apiGroup Grid
 *
 * @apiUse GetHeaderWithoutAuth
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 {
    "screeningId": "7",
    "cinemaName": "",
    "theatreName": "Hall 3",
    "movieName": "Amarsi un po'...",
    "row": 5,
    "col": 5,
    "grid": [
        [
            {
                "id": 101,
                "name": "A1",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 0,
                "row": 0
            },
            {
                "id": 102,
                "name": "A2",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 1,
                "row": 0
            },
            {
                "id": 103,
                "name": "A3",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 2,
                "row": 0
            },
            {
                "id": 104,
                "name": "A4",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 3,
                "row": 0
            },
            {
                "id": 105,
                "name": "A5",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 4,
                "row": 0
            },
            {
                "id": 6,
                "name": "A6",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 5,
                "row": 0
            },
            {
                "id": 7,
                "name": "A7",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 6,
                "row": 0
            },
            {
                "id": 8,
                "name": "A8",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 7,
                "row": 0
            },
            {
                "id": 9,
                "name": "A9",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 8,
                "row": 0
            },
            {
                "id": 10,
                "name": "A10",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 9,
                "row": 0
            }
        ],
        [
            {
                "id": 106,
                "name": "B1",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 0,
                "row": 1
            },
            {
                "id": 107,
                "name": "B2",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 1,
                "row": 1
            },
            {
                "id": 108,
                "name": "B3",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 2,
                "row": 1
            },
            {
                "id": 109,
                "name": "B4",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 3,
                "row": 1
            },
            {
                "id": 110,
                "name": "B5",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 4,
                "row": 1
            },
            {
                "id": 16,
                "name": "B6",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 5,
                "row": 1
            },
            {
                "id": 17,
                "name": "B7",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 6,
                "row": 1
            },
            {
                "id": 18,
                "name": "B8",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 7,
                "row": 1
            },
            {
                "id": 19,
                "name": "B9",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 8,
                "row": 1
            },
            {
                "id": 20,
                "name": "B10",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 9,
                "row": 1
            }
        ],
        [
            {
                "id": 111,
                "name": "C1",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 0,
                "row": 2
            },
            {
                "id": 112,
                "name": "C2",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 1,
                "row": 2
            },
            {
                "id": 113,
                "name": "C3",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 2,
                "row": 2
            },
            {
                "id": 114,
                "name": "C4",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 3,
                "row": 2
            },
            {
                "id": 115,
                "name": "C5",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 4,
                "row": 2
            },
            {
                "id": 26,
                "name": "C6",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 5,
                "row": 2
            },
            {
                "id": 27,
                "name": "C7",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 6,
                "row": 2
            },
            {
                "id": 28,
                "name": "C8",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 7,
                "row": 2
            },
            {
                "id": 29,
                "name": "C9",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 8,
                "row": 2
            },
            {
                "id": 30,
                "name": "C10",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 9,
                "row": 2
            }
        ],
        [
            {
                "id": 116,
                "name": "D1",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 0,
                "row": 3
            },
            {
                "id": 117,
                "name": "D2",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 1,
                "row": 3
            },
            {
                "id": 118,
                "name": "D3",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 2,
                "row": 3
            },
            {
                "id": 119,
                "name": "D4",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 3,
                "row": 3
            },
            {
                "id": 120,
                "name": "D5",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 4,
                "row": 3
            },
            {
                "id": 36,
                "name": "D6",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 5,
                "row": 3
            },
            {
                "id": 37,
                "name": "D7",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 6,
                "row": 3
            },
            {
                "id": 38,
                "name": "D8",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 7,
                "row": 3
            },
            {
                "id": 39,
                "name": "D9",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 8,
                "row": 3
            },
            {
                "id": 40,
                "name": "D10",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 9,
                "row": 3
            }
        ],
        [
            {
                "id": 121,
                "name": "E1",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 0,
                "row": 4
            },
            {
                "id": 122,
                "name": "E2",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 1,
                "row": 4
            },
            {
                "id": 123,
                "name": "E3",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 2,
                "row": 4
            },
            {
                "id": 124,
                "name": "E4",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 3,
                "row": 4
            },
            {
                "id": 125,
                "name": "E5",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 4,
                "row": 4
            },
            {
                "id": 46,
                "name": "E6",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 5,
                "row": 4
            },
            {
                "id": 47,
                "name": "E7",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 6,
                "row": 4
            },
            {
                "id": 48,
                "name": "E8",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 7,
                "row": 4
            },
            {
                "id": 49,
                "name": "E9",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 8,
                "row": 4
            },
            {
                "id": 50,
                "name": "E10",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 9,
                "row": 4
            }
        ],
        [
            {
                "id": 51,
                "name": "F1",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 0,
                "row": 5
            },
            {
                "id": 52,
                "name": "F2",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 1,
                "row": 5
            },
            {
                "id": 53,
                "name": "F3",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 2,
                "row": 5
            },
            {
                "id": 54,
                "name": "F4",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 3,
                "row": 5
            },
            {
                "id": 55,
                "name": "F5",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 4,
                "row": 5
            },
            {
                "id": 56,
                "name": "F6",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 5,
                "row": 5
            },
            {
                "id": 57,
                "name": "F7",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 6,
                "row": 5
            },
            {
                "id": 58,
                "name": "F8",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 7,
                "row": 5
            },
            {
                "id": 59,
                "name": "F9",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 8,
                "row": 5
            },
            {
                "id": 60,
                "name": "F10",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 9,
                "row": 5
            }
        ],
        [
            {
                "id": 61,
                "name": "G1",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 0,
                "row": 6
            },
            {
                "id": 62,
                "name": "G2",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 1,
                "row": 6
            },
            {
                "id": 63,
                "name": "G3",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 2,
                "row": 6
            },
            {
                "id": 64,
                "name": "G4",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 3,
                "row": 6
            },
            {
                "id": 65,
                "name": "G5",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 4,
                "row": 6
            },
            {
                "id": 66,
                "name": "G6",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 5,
                "row": 6
            },
            {
                "id": 67,
                "name": "G7",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 6,
                "row": 6
            },
            {
                "id": 68,
                "name": "G8",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 7,
                "row": 6
            },
            {
                "id": 69,
                "name": "G9",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 8,
                "row": 6
            },
            {
                "id": 70,
                "name": "G10",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 9,
                "row": 6
            }
        ],
        [
            {
                "id": 71,
                "name": "H1",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 0,
                "row": 7
            },
            {
                "id": 72,
                "name": "H2",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 1,
                "row": 7
            },
            {
                "id": 73,
                "name": "H3",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 2,
                "row": 7
            },
            {
                "id": 74,
                "name": "H4",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 3,
                "row": 7
            },
            {
                "id": 75,
                "name": "H5",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 4,
                "row": 7
            },
            {
                "id": 76,
                "name": "H6",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 5,
                "row": 7
            },
            {
                "id": 77,
                "name": "H7",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 6,
                "row": 7
            },
            {
                "id": 78,
                "name": "H8",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 7,
                "row": 7
            },
            {
                "id": 79,
                "name": "H9",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 8,
                "row": 7
            },
            {
                "id": 80,
                "name": "H10",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 9,
                "row": 7
            }
        ],
        [
            {
                "id": 81,
                "name": "I1",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 0,
                "row": 8
            },
            {
                "id": 82,
                "name": "I2",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 1,
                "row": 8
            },
            {
                "id": 83,
                "name": "I3",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 2,
                "row": 8
            },
            {
                "id": 84,
                "name": "I4",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 3,
                "row": 8
            },
            {
                "id": 85,
                "name": "I5",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 4,
                "row": 8
            },
            {
                "id": 86,
                "name": "I6",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 5,
                "row": 8
            },
            {
                "id": 87,
                "name": "I7",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 6,
                "row": 8
            },
            {
                "id": 88,
                "name": "I8",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 7,
                "row": 8
            },
            {
                "id": 89,
                "name": "I9",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 8,
                "row": 8
            },
            {
                "id": 90,
                "name": "I10",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 9,
                "row": 8
            }
        ],
        [
            {
                "id": 91,
                "name": "J1",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 0,
                "row": 9
            },
            {
                "id": 92,
                "name": "J2",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 1,
                "row": 9
            },
            {
                "id": 93,
                "name": "J3",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 2,
                "row": 9
            },
            {
                "id": 94,
                "name": "J4",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 3,
                "row": 9
            },
            {
                "id": 95,
                "name": "J5",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 4,
                "row": 9
            },
            {
                "id": 96,
                "name": "J6",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 5,
                "row": 9
            },
            {
                "id": 97,
                "name": "J7",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 6,
                "row": 9
            },
            {
                "id": 98,
                "name": "J8",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 7,
                "row": 9
            },
            {
                "id": 99,
                "name": "J9",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 8,
                "row": 9
            },
            {
                "id": 100,
                "name": "J10",
                "seatType": {
                    "id": 1,
                    "name": "VIP",
                    "priceFactor": 1.2,
                    "status": true,
                    "created_at": "2021-08-03T15:18:21.000000Z",
                    "updated_at": "2021-08-03T15:18:21.000000Z",
                    "color": "#DAD5AB"
                },
                "status": true,
                "booked": false,
                "price": 12,
                "col": 9,
                "row": 9
            }
        ]
    ]
 }
 *
 * @apiUse ServerServerError
 */
