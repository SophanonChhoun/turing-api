/**
 * @api {get} api/web/profile 1. Show Customer Profile
 * @apiVersion 1.0.0
 * @apiName Show Profile
 * @apiGroup Profile
 *
 * @apiUse GetHeader
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 {
    "name": "Sophanon Chhoun",
    "email": "chhounsophanon@gmail.com",
    "photo": "http://127.0.0.1:8000/uploads/images/19abf508db2a1a4ee1798047c5a94dad.png",
    "phoneNumber": "061794013"
 }
 *
 * @apiUse NotFound
 * @apiUse ServerServerError
 * @apiUse AuthorizationInvalid
 */

/**
 * @api {put} api/web/profile 2. Update Customer Profile
 * @apiVersion 1.0.0
 * @apiName Update Profile
 * @apiGroup Profile
 *
 * @apiUse PostHeader
 *
 * @apiParam {string} email            Customer Email
 * @apiParam {string} name             Customer Name
 * @apiParam {string} phoneNumber      Customer Phone Number
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 {
    "message": "Customer update success"
 }
 *
 * @apiUse NotFound
 * @apiUse ServerServerError
 * @apiUse AuthorizationInvalid
 */

/**
 * @api {patch} api/web/profile 3. Update Customer Password
 * @apiVersion 1.0.0
 * @apiName Update Password
 * @apiGroup Profile
 *
 * @apiUse PostHeader
 *
 * @apiParam {string} old_password     Customer current password
 * @apiParam {string} new_password     Customer new password
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 {
    "data": "Password update successfully"
}
 *
 * @apiUse NotFound
 * @apiUse ServerServerError
 * @apiUse AuthorizationInvalid
 */
