/**
 * @api {get} /api/cinemas 1. List cinemas
 * @apiVersion 1.0.0
 * @apiName List cinemas
 * @apiGroup Cinemas
 *
 * @apiUse GetHeaderWithoutAuth
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 [
    {
        "id": 6,
        "name": "xssadcx",
        "location": "cwcwec",
        "status": true,
        "photo": "http://127.0.0.1:8000/uploads/images/5ec06e8af64a65511a2a77154443540f.png"
    },
    {
        "id": 5,
        "name": "m m",
        "location": "xwxwe",
        "status": true,
        "photo": "http://127.0.0.1:8000/uploads/images/ce6045b991b61167aad1a738b5b49bfd.png"
    },
    {
        "id": 4,
        "name": "Turing TK",
        "location": "PP TK ",
        "status": true,
        "photo": "http://127.0.0.1:8000/uploads/images/1a2283800e9ac5bfdcc25f7ebae3f380.png"
    },
    {
        "id": 1,
        "name": "Turing CADT",
        "location": "CADT",
        "status": true,
        "photo": "http://127.0.0.1:8000/uploads/images/a2f3f14884bf61d0a9bea8b437d273bf.png"
    },
    {
        "id": 2,
        "name": "Turing Niptict",
        "location": "Niptict",
        "status": true,
        "photo": "http://127.0.0.1:8000/uploads/images/c983b6c44b15235e2c93aca24af01f8a.png"
    }
 ]
 *
 * @apiUse ServerServerError
 */
