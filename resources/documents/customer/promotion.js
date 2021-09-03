/**
 * @api {post} /api/web/promotions/${id}?coupon=${coupon promotion} 1. Get Promotion
 * @apiVersion 1.0.0
 * @apiName Get Promotion
 * @apiGroup Promotion
 *
 * @apiUse GetHeader
 *
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 {
    "id": 12,
    "title": "This is testing",
    "coupon": "ssdeds22eese",
    "percentage": "9.00",
    "bill": null,
    "conditionTotal": "0.00",
    "hasProducts": true,
    "hasScreenings": true,
    "status": true,
    "created_at": "2021-08-25T02:36:09.000000Z",
    "updated_at": "2021-08-25T02:36:09.000000Z"
 }
 *
 * @apiUse NotFound
 * @apiUse ServerServerError
 * @apiUse AuthorizationInvalid
 */
