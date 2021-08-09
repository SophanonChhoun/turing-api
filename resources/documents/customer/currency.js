/**
 * @api {get} /api/web/currency 1. Show currency
 * @apiVersion 1.0.0
 * @apiName Show Currency
 * @apiGroup Currency
 *
 * @apiUse GetHeaderWithoutAuth
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 {
    "id": 1,
    "name": "Riel",
    "price": 4100,
    "created_at": "2021-08-03T10:08:07.000000Z",
    "updated_at": "2021-08-06T07:53:54.000000Z"
 }
 *
 * @apiUse ServerServerError
 */
