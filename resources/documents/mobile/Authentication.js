/**
 * @api / Status Code
 * @apiVersion 1.0.0
 * @apiName StatusCode
 * @apiGroup Status Code
 *
 * @apiError 400 Bad request
 * @apiError 401 Authorization/Auth token is invalid
 * @apiError 403 No access rights to access
 * @apiError 404 Resource is not found
 * @apiError 412 Validation Error
 * @apiError 500 Server Error
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 401 Error Authorization & Authentication Request
 {
    "type": "ConstraintViolationError",
    "message": "Unauthenticated"
 }

 HTTP/1.1 400 Forbidden
 {
    "type": "ConstraintViolationError",
    "message": "Your account has been blocked.Please contact our team for more support."
 }

 HTTP/1.1 404 Not Found
 {
    "type": "ConstraintViolationError",
    "message": "The customer is not found."
 }

 HTTP/1.1 412 Error Validation Request
 {
    "type": "InvalidRequestError",
    "messages": {
        "first_name": [
            "The first name field is required."
        ],
    }
 }

 HTTP/1.1 500 Error In Server Request
 {
    "message": "Server Error"
 }
 */

/**
 * @api {post} /api/register 1. Register
 * @apiVersion 1.0.0
 * @apiName Register
 * @apiGroup Authentication
 *
 * @apiUse PostHeaderWithoutAuth
 *
 * @apiParam {String} name                  Name
 * @apiParam {String} email                 Email
 * @apiParam {String} password              Password
 * @apiParam {String} phoneNumber           Phone Number
 *
 * @apiExample {curl} Example usage:
 {
    "email": "chhounsophanon6@gmail.com",
    "password": "password",
    "name": "Sophanon",
    "phoneNumber": "061794013"
 }
 *
 * @apiUse DefaultResponse
 * @apiSuccess (200) {String}       data.token       auth token to authorize access private api for each customer
 * @apiSuccess (200) {object}       data.user        customer profile
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 {
    "user": {
        "id": 1,
        "email": "chhounsophanon@gmail.com",
        "name": "Sophanon Chhoun",
        "photo": "http://127.0.0.1:8000/uploads/images/19abf508db2a1a4ee1798047c5a94dad.png"
    },
    "token": "Bearer 17|Au0STUWD3IBneUx4Awug3S2MUgzUraOOF8uSY7QW"
 }
 *
 * @apiUse ErrorValidation
 * @apiUse ServerServerError
 *
 */

/**
 * @api {post} /api/login 2. Login
 * @apiVersion 1.0.0
 * @apiName Login
 * @apiGroup Authentication
 *
 * @apiUse PostHeaderWithoutAuth
 *
 * @apiParam {String} email         Customer email
 * @apiParam {String} password      Customer password
 *
 * @apiExample {curl} Example usage:
 {
    "email": "chhounsophanon14@gmail.com"
	"password": "password"
 }
 *
 * @apiUse DefaultResponse
 * @apiSuccess (200) {String}       data.token       auth token to authorize access private api for each customer
 * @apiSuccess (200) {object}       data.user               customer profile
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 {
    "user": {
        "id": 1,
        "email": "chhounsophanon@gmail.com",
        "name": "Sophanon Chhoun",
        "photo": "http://127.0.0.1:8000/uploads/images/19abf508db2a1a4ee1798047c5a94dad.png"
    },
    "token": "Bearer 17|Au0STUWD3IBneUx4Awug3S2MUgzUraOOF8uSY7QW"
 }
 *
 * @apiUse IncorrectUsernamePassword
 * @apiUse Block
 * @apiUse ErrorValidation
 * @apiUse ServerServerError
 */

/**
 * @api {post} /api/login/google 3. Login Google
 * @apiVersion 1.0.0
 * @apiName Login Google
 * @apiGroup Authentication
 *
 * @apiUse PostHeaderWithoutAuth
 *
 * @apiParam {String} token         Account Token
 *
 * @apiExample {curl} Example usage:
 {
    "token": "ya29.a0ARrdaM8FStqs8Dhyru2OPJG7AOYSUhF_ehYN0G4SPytlpBysFZMSBAhO8OQ12Qvk5VYwayXKa3ZZ6EIwYnbfTKfPOM36aZhh6x6TK-nDcFTUDYppKHOe9RJQ0EQ5g_Xyumq-eUV8Z1he6tuoSezH3_p9ccyn"
 }
 *
 * @apiUse DefaultResponse
 * @apiSuccess (200) {String}       data.token       auth token to authorize access private api for each customer
 * @apiSuccess (200) {object}       data.user               customer profile
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 {
    "user": {
        "id": 1,
        "email": "chhounsophanon@gmail.com",
        "name": "Sophanon Chhoun",
        "photo": "http://127.0.0.1:8000/uploads/images/19abf508db2a1a4ee1798047c5a94dad.png"
    },
    "token": "Bearer 17|Au0STUWD3IBneUx4Awug3S2MUgzUraOOF8uSY7QW"
 }
 *
 * @apiUse IncorrectUsernamePassword
 * @apiUse Block
 * @apiUse ErrorValidation
 * @apiUse ServerServerError
 */
