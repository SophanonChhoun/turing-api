/**
 * @apiDefine TokenExpired
 *
 * @apiError (4xx) {400} TokenExpired Token is expired
 *
 * @apiErrorExample {json} 400 (TokenExpired):
 HTTP/1.1 400 Bad Request
 {
    "type": "ConstraintViolationError",
    "message": "The token is expired."
 }
 */

/**
 * @apiDefine OtpIncorrect
 *
 * @apiError (4xx) {400} OtpIncorrect The Otp is incorrect.
 *
 * @apiErrorExample {json} 400 (OtpIncorrect):
 HTTP/1.1 400 Bad Request
 {
    "type": "ConstraintViolationError",
    "message": "The verify code confirmation does not match."
 }
 */

/**
 * @apiDefine IncorrectUsernamePassword
 *
 * @apiError (4xx) {400} IncorrectUsernamePassword Username or Password is incorrect.
 *
 * @apiErrorExample {json} 400 (IncorrectUsernamePassword):
 HTTP/1.1 400 Bad Request
 {
    "type": "ConstraintViolationError",
    "message": "These credentials do not match our records."
 }
 */

/**
 * @apiDefine AuthorizationInvalid
 *
 * @apiError (4xx) {401} AuthorizationInvalid  authorization token is missing, expire, or invalid.
 *
 * @apiErrorExample {json} 401 (AuthorizationInvalid):
 HTTP/1.1 401 Unauthorized
 {
    "type": "ConstraintViolationError"
    "message": "Unauthenticated."
 }
 *
 */

/**
 * @apiDefine Block
 *
 * @apiError (4xx) {401} User status false.
 *
 * @apiErrorExample {json} 401 (Block):
 HTTP/1.1 401 Unauthorized
 {
    "type": "ConstraintViolationError"
    "message": "Your account has been blocked.Please contact our team for more support."
 }
 *
 */
/**
 * @apiDefine AuthInvalid
 *
 * @apiError (4xx) {400} User status block
 *
 * @apiErrorExample {json} 400 (AuthInvalid):
 HTTP/1.1 401 Unauthorized
 {
    "type": "ConstraintViolationError"
    "message": "user is unauthorized. The token is invalid."
 }
 *
 */

/**
 * @apiDefine NotFound
 *
 * @apiError (4xx) {404} NotFound  resource is not found
 *
 * @apiErrorExample {json} 404 (NotFound):
 HTTP/1.1 404 Not Found
 {
    "type": "ConstraintViolationError"
    "message": "The :attribute is not found."
 }
 *
 */

/**
 * @apiDefine ErrorValidation
 *
 * @apiError (4xx) {412} ErrorValidation validation of required, format, min, max, ....
 *
 * @apiErrorExample {json} 412 (ErrorValidation):
 HTTP/1.1 401 Unauthorized
 {
    "type": "InvalidRequestError"
    "messages": {
        "field": [
            "validation message"
        ]
    }
 }
 *
 */

/**
 * @apiDefine ErrorValidation
 *
 * @apiError (4xx) {412} ErrorValidation validation of required, format, min, max, ....
 *
 * @apiErrorExample {json} 412 (ErrorValidation):
 HTTP/1.1 401 Unauthorized
 {
    "type": "InvalidRequestError"
    "messages": {
        "field": [
            "validation message"
        ]
    }
 }
 *
 */

/**
 * @apiDefine ServerServerError
 *
 * @apiError (5xx) {500} InternalSeverError internal server error
 *
 * @apiErrorExample {json} 500 (InternalSeverError):
 HTTP/1.1 500 Error In Server Request
 {
    "message": "Server Error"
 }
 *
 */
