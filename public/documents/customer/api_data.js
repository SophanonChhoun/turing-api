define({ "api": [
  {
    "type": "post",
    "url": "/api/web/login",
    "title": "2. Login",
    "version": "1.0.0",
    "name": "Login",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Customer email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Customer password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n    \"email\": \"chhounsophanon14@gmail.com\"\n\t\"password\": \"password\"\n }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.token",
            "description": "<p>auth token to authorize access private api for each customer</p>"
          },
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "data.user",
            "description": "<p>customer profile</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"user\": {\n       \"id\": 1,\n       \"email\": \"chhounsophanon@gmail.com\",\n       \"name\": \"Sophanon Chhoun\",\n       \"photo\": \"http://127.0.0.1:8000/uploads/images/19abf508db2a1a4ee1798047c5a94dad.png\"\n   },\n   \"token\": \"Bearer 17|Au0STUWD3IBneUx4Awug3S2MUgzUraOOF8uSY7QW\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Authentication.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/web/login"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "400",
            "optional": false,
            "field": "IncorrectUsernamePassword",
            "description": "<p>Username or Password is incorrect.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "User",
            "description": "<p>status false.</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 (IncorrectUsernamePassword):",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"type\": \"ConstraintViolationError\",\n   \"message\": \"These credentials do not match our records.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (Block):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"type\": \"ConstraintViolationError\"\n   \"message\": \"Your account has been blocked.Please contact our team for more support.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"type\": \"InvalidRequestError\"\n   \"messages\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/web/register",
    "title": "1. Register",
    "version": "1.0.0",
    "name": "Register",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone Number</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n   \"email\": \"chhounsophanon6@gmail.com\",\n   \"password\": \"password\",\n   \"name\": \"Sophanon\",\n   \"phoneNumber\": \"061794013\"\n}",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.token",
            "description": "<p>auth token to authorize access private api for each customer</p>"
          },
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "data.user",
            "description": "<p>customer profile</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"user\": {\n       \"id\": 1,\n       \"email\": \"chhounsophanon@gmail.com\",\n       \"name\": \"Sophanon Chhoun\",\n       \"photo\": \"http://127.0.0.1:8000/uploads/images/19abf508db2a1a4ee1798047c5a94dad.png\"\n   },\n   \"token\": \"Bearer 17|Au0STUWD3IBneUx4Awug3S2MUgzUraOOF8uSY7QW\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Authentication.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/web/register"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"type\": \"InvalidRequestError\"\n   \"messages\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/web/currency",
    "title": "1. Show currency",
    "version": "1.0.0",
    "name": "Show_Currency",
    "group": "Currency",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"id\": 1,\n   \"name\": \"Riel\",\n   \"price\": 4100,\n   \"created_at\": \"2021-08-03T10:08:07.000000Z\",\n   \"updated_at\": \"2021-08-06T07:53:54.000000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./currency.js",
    "groupTitle": "Currency",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/web/currency"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/web/grid/:screening_id",
    "title": "1. List Grid",
    "version": "1.0.0",
    "name": "List_Grid",
    "group": "Grid",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"screeningId\": \"7\",\n   \"cinemaName\": \"\",\n   \"theaterName\": \"Hall 3\",\n   \"movieName\": \"Amarsi un po'...\",\n   \"row\": 5,\n   \"col\": 5,\n   \"grid\": [\n       [\n           {\n               \"id\": 101,\n               \"name\": \"A1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 0\n           },\n           {\n               \"id\": 102,\n               \"name\": \"A2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 0\n           },\n           {\n               \"id\": 103,\n               \"name\": \"A3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 0\n           },\n           {\n               \"id\": 104,\n               \"name\": \"A4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 0\n           },\n           {\n               \"id\": 105,\n               \"name\": \"A5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 0\n           },\n           {\n               \"id\": 6,\n               \"name\": \"A6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 0\n           },\n           {\n               \"id\": 7,\n               \"name\": \"A7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 0\n           },\n           {\n               \"id\": 8,\n               \"name\": \"A8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 0\n           },\n           {\n               \"id\": 9,\n               \"name\": \"A9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 0\n           },\n           {\n               \"id\": 10,\n               \"name\": \"A10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 0\n           }\n       ],\n       [\n           {\n               \"id\": 106,\n               \"name\": \"B1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 1\n           },\n           {\n               \"id\": 107,\n               \"name\": \"B2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 1\n           },\n           {\n               \"id\": 108,\n               \"name\": \"B3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 1\n           },\n           {\n               \"id\": 109,\n               \"name\": \"B4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 1\n           },\n           {\n               \"id\": 110,\n               \"name\": \"B5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 1\n           },\n           {\n               \"id\": 16,\n               \"name\": \"B6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 1\n           },\n           {\n               \"id\": 17,\n               \"name\": \"B7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 1\n           },\n           {\n               \"id\": 18,\n               \"name\": \"B8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 1\n           },\n           {\n               \"id\": 19,\n               \"name\": \"B9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 1\n           },\n           {\n               \"id\": 20,\n               \"name\": \"B10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 1\n           }\n       ],\n       [\n           {\n               \"id\": 111,\n               \"name\": \"C1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 2\n           },\n           {\n               \"id\": 112,\n               \"name\": \"C2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 2\n           },\n           {\n               \"id\": 113,\n               \"name\": \"C3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 2\n           },\n           {\n               \"id\": 114,\n               \"name\": \"C4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 2\n           },\n           {\n               \"id\": 115,\n               \"name\": \"C5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 2\n           },\n           {\n               \"id\": 26,\n               \"name\": \"C6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 2\n           },\n           {\n               \"id\": 27,\n               \"name\": \"C7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 2\n           },\n           {\n               \"id\": 28,\n               \"name\": \"C8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 2\n           },\n           {\n               \"id\": 29,\n               \"name\": \"C9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 2\n           },\n           {\n               \"id\": 30,\n               \"name\": \"C10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 2\n           }\n       ],\n       [\n           {\n               \"id\": 116,\n               \"name\": \"D1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 3\n           },\n           {\n               \"id\": 117,\n               \"name\": \"D2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 3\n           },\n           {\n               \"id\": 118,\n               \"name\": \"D3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 3\n           },\n           {\n               \"id\": 119,\n               \"name\": \"D4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 3\n           },\n           {\n               \"id\": 120,\n               \"name\": \"D5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 3\n           },\n           {\n               \"id\": 36,\n               \"name\": \"D6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 3\n           },\n           {\n               \"id\": 37,\n               \"name\": \"D7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 3\n           },\n           {\n               \"id\": 38,\n               \"name\": \"D8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 3\n           },\n           {\n               \"id\": 39,\n               \"name\": \"D9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 3\n           },\n           {\n               \"id\": 40,\n               \"name\": \"D10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 3\n           }\n       ],\n       [\n           {\n               \"id\": 121,\n               \"name\": \"E1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 4\n           },\n           {\n               \"id\": 122,\n               \"name\": \"E2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 4\n           },\n           {\n               \"id\": 123,\n               \"name\": \"E3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 4\n           },\n           {\n               \"id\": 124,\n               \"name\": \"E4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 4\n           },\n           {\n               \"id\": 125,\n               \"name\": \"E5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 4\n           },\n           {\n               \"id\": 46,\n               \"name\": \"E6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 4\n           },\n           {\n               \"id\": 47,\n               \"name\": \"E7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 4\n           },\n           {\n               \"id\": 48,\n               \"name\": \"E8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 4\n           },\n           {\n               \"id\": 49,\n               \"name\": \"E9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 4\n           },\n           {\n               \"id\": 50,\n               \"name\": \"E10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 4\n           }\n       ],\n       [\n           {\n               \"id\": 51,\n               \"name\": \"F1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 5\n           },\n           {\n               \"id\": 52,\n               \"name\": \"F2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 5\n           },\n           {\n               \"id\": 53,\n               \"name\": \"F3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 5\n           },\n           {\n               \"id\": 54,\n               \"name\": \"F4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 5\n           },\n           {\n               \"id\": 55,\n               \"name\": \"F5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 5\n           },\n           {\n               \"id\": 56,\n               \"name\": \"F6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 5\n           },\n           {\n               \"id\": 57,\n               \"name\": \"F7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 5\n           },\n           {\n               \"id\": 58,\n               \"name\": \"F8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 5\n           },\n           {\n               \"id\": 59,\n               \"name\": \"F9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 5\n           },\n           {\n               \"id\": 60,\n               \"name\": \"F10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 5\n           }\n       ],\n       [\n           {\n               \"id\": 61,\n               \"name\": \"G1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 6\n           },\n           {\n               \"id\": 62,\n               \"name\": \"G2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 6\n           },\n           {\n               \"id\": 63,\n               \"name\": \"G3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 6\n           },\n           {\n               \"id\": 64,\n               \"name\": \"G4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 6\n           },\n           {\n               \"id\": 65,\n               \"name\": \"G5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 6\n           },\n           {\n               \"id\": 66,\n               \"name\": \"G6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 6\n           },\n           {\n               \"id\": 67,\n               \"name\": \"G7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 6\n           },\n           {\n               \"id\": 68,\n               \"name\": \"G8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 6\n           },\n           {\n               \"id\": 69,\n               \"name\": \"G9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 6\n           },\n           {\n               \"id\": 70,\n               \"name\": \"G10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 6\n           }\n       ],\n       [\n           {\n               \"id\": 71,\n               \"name\": \"H1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 7\n           },\n           {\n               \"id\": 72,\n               \"name\": \"H2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 7\n           },\n           {\n               \"id\": 73,\n               \"name\": \"H3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 7\n           },\n           {\n               \"id\": 74,\n               \"name\": \"H4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 7\n           },\n           {\n               \"id\": 75,\n               \"name\": \"H5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 7\n           },\n           {\n               \"id\": 76,\n               \"name\": \"H6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 7\n           },\n           {\n               \"id\": 77,\n               \"name\": \"H7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 7\n           },\n           {\n               \"id\": 78,\n               \"name\": \"H8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 7\n           },\n           {\n               \"id\": 79,\n               \"name\": \"H9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 7\n           },\n           {\n               \"id\": 80,\n               \"name\": \"H10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 7\n           }\n       ],\n       [\n           {\n               \"id\": 81,\n               \"name\": \"I1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 8\n           },\n           {\n               \"id\": 82,\n               \"name\": \"I2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 8\n           },\n           {\n               \"id\": 83,\n               \"name\": \"I3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 8\n           },\n           {\n               \"id\": 84,\n               \"name\": \"I4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 8\n           },\n           {\n               \"id\": 85,\n               \"name\": \"I5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 8\n           },\n           {\n               \"id\": 86,\n               \"name\": \"I6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 8\n           },\n           {\n               \"id\": 87,\n               \"name\": \"I7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 8\n           },\n           {\n               \"id\": 88,\n               \"name\": \"I8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 8\n           },\n           {\n               \"id\": 89,\n               \"name\": \"I9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 8\n           },\n           {\n               \"id\": 90,\n               \"name\": \"I10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 8\n           }\n       ],\n       [\n           {\n               \"id\": 91,\n               \"name\": \"J1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 9\n           },\n           {\n               \"id\": 92,\n               \"name\": \"J2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 9\n           },\n           {\n               \"id\": 93,\n               \"name\": \"J3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 9\n           },\n           {\n               \"id\": 94,\n               \"name\": \"J4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 9\n           },\n           {\n               \"id\": 95,\n               \"name\": \"J5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 9\n           },\n           {\n               \"id\": 96,\n               \"name\": \"J6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 9\n           },\n           {\n               \"id\": 97,\n               \"name\": \"J7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 9\n           },\n           {\n               \"id\": 98,\n               \"name\": \"J8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 9\n           },\n           {\n               \"id\": 99,\n               \"name\": \"J9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 9\n           },\n           {\n               \"id\": 100,\n               \"name\": \"J10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 9\n           }\n       ]\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./grid.js",
    "groupTitle": "Grid",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/web/grid/:screening_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/web/movies/:id",
    "title": "4. Movies Detail",
    "version": "1.0.0",
    "name": "List_Movie_Detail",
    "group": "Movie",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"id\": 4,\n   \"title\": \"Amarsi un po'...\",\n   \"synopsis\": \"In an accident the young mechanic Marco Coccia meets Cristiana. The two fall in love with one another. Cristiana confesses only later that she is a genuine princess. For Marco it is not a problem, but for Cristiana's parents it is a very big problem. The two must separate. When one evening Cristiana calls Marco and lets him know about her forthcoming wedding, Marco with the car races toward Paris and has an accident...\",\n   \"rated\": \"R\",\n   \"directors\": [\n       {\n           \"id\": 1,\n           \"name\": \"Neath Mony\"\n       }\n   ],\n   \"casts\": [\n       {\n           \"id\": 1,\n           \"name\": \"Neath Mony\"\n       }\n   ],\n   \"genres\": [\n       {\n           \"id\": 1,\n           \"name\": \"Action\"\n       }\n   ],\n   \"poster\": \"/wHYq4CXe2oSlF3BlxFeFgb8XUW9.jpg\",\n   \"backdrop\": \"/1UPzHDjUT40abGPPr4wKxdrX0ar.jpg\",\n   \"trailerUrl\": \"VanCRj8eI9o\",\n   \"cinemas\": [\n       {\n           \"id\": 2,\n           \"name\": \"Turing Niptict\",\n           \"location\": \"Niptict\",\n           \"screening\": [\n               [\n                   {\n                       \"id\": 7,\n                       \"movieId\": 4,\n                       \"price\": 10,\n                       \"theaterId\": 2,\n                       \"date\": \"2021-08-09\",\n                       \"start_time\": \"09:33:00\",\n                       \"status\": true,\n                       \"created_at\": \"2021-08-07T02:34:11.000000Z\",\n                       \"updated_at\": \"2021-08-09T03:24:37.000000Z\",\n                       \"cinemaId\": 2,\n                       \"subId\": 1,\n                       \"dubId\": 2,\n                       \"deleted_at\": null\n                   }\n               ]\n           ]\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./movie.js",
    "groupTitle": "Movie",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/web/movies/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"type\": \"ConstraintViolationError\"\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/web/movies/now-showing",
    "title": "2. List Now Showing Movies",
    "version": "1.0.0",
    "name": "List_Now_showing_movies",
    "group": "Movie",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n[\n{\n       \"id\": 1,\n       \"poster\": \"/n5Re2ywnpqwAXTin8W5j3lqSwc7.jpg\",\n       \"backdrop\": \"/o2SeAw8ARPB1D8oudCRJcxW3w60.jpg\",\n       \"title\": \"Wrong Turn 2: Dead End\",\n       \"trailerUrl\": \"VanCRj8eI9o\",\n       \"synopsis\": \"Retired military commander Colonel Dale Murphy hosts the simulated post-apocalyptic reality show where participants are challenged to survive a remote West Virginia wasteland. But the show turns into a nightmarish showdown when each realizes they are being hunted by an inbred family of cannibals determined to make them all dinner!\",\n       \"runningTime\": 96,\n       \"directors\": [\n           {\n               \"id\": 2,\n               \"name\": \"Neath Mony\"\n           }\n       ],\n       \"casts\": [\n           {\n               \"id\": 1,\n               \"name\": \"Neath Mony\"\n           }\n       ],\n       \"genres\": [\n           {\n               \"id\": 1,\n               \"name\": \"Action\"\n           }\n       ]\n   },\n{\n       \"id\": 2,\n       \"poster\": \"/maqsygPJvhESIOQGclUAEEWxNC.jpg\",\n       \"backdrop\": \"/9Ef8abhHjuqyCNlhscEohNXsLJj.jpg\",\n       \"title\": \"Tod@s Caen\",\n       \"trailerUrl\": \"SeCXaQuFAn0\",\n       \"synopsis\": \"A pair of seducers try to prove who has the best techniques while trying not to fall in love with each other.\",\n       \"runningTime\": 120,\n       \"directors\": [\n           {\n               \"id\": 1,\n               \"name\": \"Neath Mony\"\n           }\n       ],\n       \"casts\": [\n           {\n               \"id\": 2,\n               \"name\": \"Neath Mony\"\n           }\n       ],\n       \"genres\": [\n           {\n               \"id\": 1,\n               \"name\": \"Action\"\n           }\n       ]\n   },\n{\n       \"id\": 3,\n       \"poster\": \"/k9lhZ0PhY78nzwG034rNpsLXlpW.jpg\",\n       \"backdrop\": \"/3Ywbn6XkpBBemuoThyUwr0opLmG.jpg\",\n       \"title\": \"L'ennemi public n??1\",\n       \"trailerUrl\": \"XgYzDUhoah0\",\n       \"synopsis\": \"The story of Jacques Mesrine, France's public enemy No. 1 during the 1970s. After nearly two decades of legendary criminal feats -- from multiple bank robberies and to prison breaks -- Mesrine was gunned down by the French police in Paris.\",\n       \"runningTime\": 133,\n       \"directors\": [\n           {\n               \"id\": 1,\n               \"name\": \"Neath Mony\"\n           }\n       ],\n       \"casts\": [\n           {\n               \"id\": 2,\n               \"name\": \"Neath Mony\"\n           }\n       ],\n       \"genres\": [\n           {\n               \"id\": 1,\n               \"name\": \"Action\"\n           }\n       ]\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./movie.js",
    "groupTitle": "Movie",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/web/movies/now-showing"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/web/movies/upcoming",
    "title": "1. List Upcoming movies",
    "version": "1.0.0",
    "name": "List_Upcoming_movies",
    "group": "Movie",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n[\n   {\n       \"id\": 4,\n       \"poster\": \"/wHYq4CXe2oSlF3BlxFeFgb8XUW9.jpg\",\n       \"backdrop\": \"/1UPzHDjUT40abGPPr4wKxdrX0ar.jpg\",\n       \"title\": \"Amarsi un po'...\",\n       \"trailerUrl\": \"VanCRj8eI9o\",\n       \"synopsis\": \"In an accident the young mechanic Marco Coccia meets Cristiana. The two fall in love with one another. Cristiana confesses only later that she is a genuine princess. For Marco it is not a problem, but for Cristiana's parents it is a very big problem. The two must separate. When one evening Cristiana calls Marco and lets him know about her forthcoming wedding, Marco with the car races toward Paris and has an accident...\",\n       \"runningTime\": 93,\n       \"directors\": [\n           {\n               \"id\": 1,\n               \"name\": \"Neath Mony\"\n           }\n       ],\n       \"casts\": [\n           {\n               \"id\": 1,\n               \"name\": \"Neath Mony\"\n           }\n       ],\n       \"genres\": [\n           {\n               \"id\": 1,\n               \"name\": \"Action\"\n           }\n       ]\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./movie.js",
    "groupTitle": "Movie",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/web/movies/upcoming"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/web/movies/advertisement",
    "title": "3. List advertisement movie",
    "version": "1.0.0",
    "name": "List_advertisement_movie",
    "group": "Movie",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n[\n{\n       \"id\": 4,\n       \"poster\": \"/wHYq4CXe2oSlF3BlxFeFgb8XUW9.jpg\",\n       \"backdrop\": \"/1UPzHDjUT40abGPPr4wKxdrX0ar.jpg\",\n       \"title\": \"Amarsi un po'...\",\n       \"trailerUrl\": \"VanCRj8eI9o\",\n       \"synopsis\": \"In an accident the young mechanic Marco Coccia meets Cristiana. The two fall in love with one another. Cristiana confesses only later that she is a genuine princess. For Marco it is not a problem, but for Cristiana's parents it is a very big problem. The two must separate. When one evening Cristiana calls Marco and lets him know about her forthcoming wedding, Marco with the car races toward Paris and has an accident...\",\n       \"runningTime\": 93,\n       \"directors\": [\n           {\n               \"id\": 1,\n               \"name\": \"Neath Mony\"\n           }\n       ],\n       \"casts\": [\n           {\n               \"id\": 1,\n               \"name\": \"Neath Mony\"\n           }\n       ],\n       \"genres\": [\n           {\n               \"id\": 1,\n               \"name\": \"Action\"\n           }\n       ]\n   },\n   {\n       \"id\": 3,\n       \"poster\": \"/k9lhZ0PhY78nzwG034rNpsLXlpW.jpg\",\n       \"backdrop\": \"/3Ywbn6XkpBBemuoThyUwr0opLmG.jpg\",\n       \"title\": \"L'ennemi public n??1\",\n       \"trailerUrl\": \"XgYzDUhoah0\",\n       \"synopsis\": \"The story of Jacques Mesrine, France's public enemy No. 1 during the 1970s. After nearly two decades of legendary criminal feats -- from multiple bank robberies and to prison breaks -- Mesrine was gunned down by the French police in Paris.\",\n       \"runningTime\": 133,\n       \"directors\": [\n           {\n               \"id\": 1,\n               \"name\": \"Neath Mony\"\n           }\n       ],\n       \"casts\": [\n           {\n               \"id\": 2,\n               \"name\": \"Neath Mony\"\n           }\n       ],\n       \"genres\": [\n           {\n               \"id\": 1,\n               \"name\": \"Action\"\n           }\n       ]\n   },\n   {\n       \"id\": 2,\n       \"poster\": \"/maqsygPJvhESIOQGclUAEEWxNC.jpg\",\n       \"backdrop\": \"/9Ef8abhHjuqyCNlhscEohNXsLJj.jpg\",\n       \"title\": \"Tod@s Caen\",\n       \"trailerUrl\": \"SeCXaQuFAn0\",\n       \"synopsis\": \"A pair of seducers try to prove who has the best techniques while trying not to fall in love with each other.\",\n       \"runningTime\": 120,\n       \"directors\": [\n           {\n               \"id\": 1,\n               \"name\": \"Neath Mony\"\n           }\n       ],\n       \"casts\": [\n           {\n               \"id\": 2,\n               \"name\": \"Neath Mony\"\n           }\n       ],\n       \"genres\": [\n           {\n               \"id\": 1,\n               \"name\": \"Action\"\n           }\n       ]\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./movie.js",
    "groupTitle": "Movie",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/web/movies/advertisement"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "api/web/profile",
    "title": "1. Show Customer Profile",
    "version": "1.0.0",
    "name": "Show_Profile",
    "group": "Profile",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"name\": \"Sophanon Chhoun\",\n   \"email\": \"chhounsophanon@gmail.com\",\n   \"photo\": \"http://127.0.0.1:8000/uploads/images/19abf508db2a1a4ee1798047c5a94dad.png\",\n   \"phoneNumber\": \"061794013\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./customer.js",
    "groupTitle": "Profile",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000/api/web/profile"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"type\": \"ConstraintViolationError\"\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"type\": \"ConstraintViolationError\"\n   \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "api/web/profile",
    "title": "3. Update Customer Password",
    "version": "1.0.0",
    "name": "Update_Password",
    "group": "Profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "old_password",
            "description": "<p>Customer current password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "new_password",
            "description": "<p>Customer new password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n {\n    \"data\": \"Password update successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./customer.js",
    "groupTitle": "Profile",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000/api/web/profile"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"type\": \"ConstraintViolationError\"\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"type\": \"ConstraintViolationError\"\n   \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "api/web/profile",
    "title": "2. Update Customer Profile",
    "version": "1.0.0",
    "name": "Update_Profile",
    "group": "Profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Customer Email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Customer Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Customer Phone Number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"message\": \"Customer update success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./customer.js",
    "groupTitle": "Profile",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000/api/web/profile"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"type\": \"ConstraintViolationError\"\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"type\": \"ConstraintViolationError\"\n   \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/web/screenings/now-showing",
    "title": "1. List Now Showing Screenings",
    "version": "1.0.0",
    "name": "List_Now_Showing_Screenings",
    "group": "Screening",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n[\n{\n       \"id\": 4,\n       \"title\": \"Amarsi un po'...\",\n       \"trailerUrl\": \"VanCRj8eI9o\",\n       \"synopsis\": \"In an accident the young mechanic Marco Coccia meets Cristiana. The two fall in love with one another. Cristiana confesses only later that she is a genuine princess. For Marco it is not a problem, but for Cristiana's parents it is a very big problem. The two must separate. When one evening Cristiana calls Marco and lets him know about her forthcoming wedding, Marco with the car races toward Paris and has an accident...\",\n       \"ratedId\": 1,\n       \"runningTime\": 93,\n       \"status\": true,\n       \"releasedDate\": \"2021-08-26\",\n       \"created_at\": \"2021-08-05T09:22:12.000000Z\",\n       \"updated_at\": \"2021-08-05T09:22:12.000000Z\",\n       \"backdrop\": \"/1UPzHDjUT40abGPPr4wKxdrX0ar.jpg\",\n       \"poster\": \"/wHYq4CXe2oSlF3BlxFeFgb8XUW9.jpg\",\n       \"screenings\": [\n           [\n               {\n                   \"id\": 7,\n                   \"movieId\": 4,\n                   \"price\": 10,\n                   \"theaterId\": 1,\n                   \"date\": \"2021-08-07\",\n                   \"start_time\": \"09:33:00\",\n                   \"status\": true,\n                   \"created_at\": \"2021-08-07T02:34:11.000000Z\",\n                   \"updated_at\": \"2021-08-07T02:34:11.000000Z\",\n                   \"cinemaId\": 2,\n                   \"subId\": 1,\n                   \"dubId\": 2\n               },\n               {\n                   \"id\": 8,\n                   \"movieId\": 4,\n                   \"price\": 100,\n                   \"theaterId\": 1,\n                   \"date\": \"2021-08-07\",\n                   \"start_time\": \"11:33:00\",\n                   \"status\": true,\n                   \"created_at\": \"2021-08-07T02:34:11.000000Z\",\n                   \"updated_at\": \"2021-08-07T02:34:11.000000Z\",\n                   \"cinemaId\": 2,\n                   \"subId\": 1,\n                   \"dubId\": 2\n               },\n               {\n                   \"id\": 5,\n                   \"movieId\": 4,\n                   \"price\": 5,\n                   \"theaterId\": 1,\n                   \"date\": \"2021-08-07\",\n                   \"start_time\": \"12:24:00\",\n                   \"status\": true,\n                   \"created_at\": \"2021-08-05T14:25:33.000000Z\",\n                   \"updated_at\": \"2021-08-05T15:03:27.000000Z\",\n                   \"cinemaId\": 2,\n                   \"subId\": 1,\n                   \"dubId\": 2\n               }\n           ],\n           [\n               {\n                   \"id\": 9,\n                   \"movieId\": 4,\n                   \"price\": 100,\n                   \"theaterId\": 1,\n                   \"date\": \"2021-08-08\",\n                   \"start_time\": \"09:34:00\",\n                   \"status\": true,\n                   \"created_at\": \"2021-08-07T02:34:11.000000Z\",\n                   \"updated_at\": \"2021-08-07T02:34:11.000000Z\",\n                   \"cinemaId\": 2,\n                   \"subId\": 1,\n                   \"dubId\": 2\n               }\n           ]\n       ]\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./screening.js",
    "groupTitle": "Screening",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/web/screenings/now-showing"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "",
    "url": "/",
    "title": "Status Code",
    "version": "1.0.0",
    "name": "StatusCode",
    "group": "Status_Code",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad request</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Authorization/Auth token is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>No access rights to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Resource is not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "412",
            "description": "<p>Validation Error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Server Error</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Error Authorization & Authentication Request\n{\n   \"type\": \"ConstraintViolationError\",\n   \"message\": \"Unauthenticated\"\n}\n\nHTTP/1.1 400 Forbidden\n{\n   \"type\": \"ConstraintViolationError\",\n   \"message\": \"Your account has been blocked.Please contact our team for more support.\"\n}\n\nHTTP/1.1 404 Not Found\n{\n   \"type\": \"ConstraintViolationError\",\n   \"message\": \"The customer is not found.\"\n}\n\nHTTP/1.1 412 Error Validation Request\n{\n   \"type\": \"InvalidRequestError\",\n   \"messages\": {\n       \"first_name\": [\n           \"The first name field is required.\"\n       ],\n   }\n}\n\nHTTP/1.1 500 Error In Server Request\n{\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Authentication.js",
    "groupTitle": "Status_Code",
    "sampleRequest": [
      {
        "url": "/"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/web/tickets",
    "title": "1. Buy Ticket",
    "version": "1.0.0",
    "name": "Buy_Ticket",
    "group": "Ticket",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "screeningId",
            "description": "<p>Screening Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cinemaName",
            "description": "<p>Cinema Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "theaterName",
            "description": "<p>Theater Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movieName",
            "description": "<p>Movie Name</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "seats",
            "description": "<p>Seats</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n   \"screeningId\": \"7\",\n   \"cinemaName\": \"Turing Niptict\",\n   \"theaterName\": \"Hall 3\",\n   \"movieName\": \"Amarsi un po'...\",\n   \"seats\": [\n       {\n           \"id\": 103,\n           \"price\": 12\n       },\n       {\n           \"id\": 104,\n           \"price\": 12\n       }\n   ]\n}",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"message\": \"Tickets bought successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ticket.js",
    "groupTitle": "Ticket",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000/api/web/tickets"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"type\": \"ConstraintViolationError\"\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"type\": \"ConstraintViolationError\"\n   \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "api/web/tickets",
    "title": "2. List Ticket",
    "version": "1.0.0",
    "name": "List_Ticket",
    "group": "Ticket",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n[\n    {\n       \"id\": 6,\n       \"price\": 12,\n       \"movie\": \"Amarsi un po'...\",\n       \"seat\": \"A3\",\n       \"cinema\": \"Turing Niptict\",\n       \"customer\": \"Sophanon Chhoun\",\n       \"theatre\": \"Hall 3\",\n       \"checked_in\": false\n   },\n   {\n       \"id\": 7,\n       \"price\": 12,\n       \"movie\": \"Amarsi un po'...\",\n       \"seat\": \"A4\",\n       \"cinema\": \"Turing Niptict\",\n       \"customer\": \"Sophanon Chhoun\",\n       \"theatre\": \"Hall 3\",\n       \"checked_in\": false\n   },\n   {\n       \"id\": 3,\n       \"price\": 12,\n       \"movie\": \"Amarsi un po'...\",\n       \"seat\": \"A1\",\n       \"cinema\": \"Turing Niptict\",\n       \"customer\": \"Sophanon Chhoun\",\n       \"theatre\": \"Hall 3\",\n       \"checked_in\": false\n   },\n   {\n       \"id\": 4,\n       \"price\": 12,\n       \"movie\": \"Amarsi un po'...\",\n       \"seat\": \"A2\",\n       \"cinema\": \"Turing Niptict\",\n       \"customer\": \"Sophanon Chhoun\",\n       \"theatre\": \"Hall 3\",\n       \"checked_in\": false\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./ticket.js",
    "groupTitle": "Ticket",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000/api/web/tickets"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ],
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"type\": \"ConstraintViolationError\"\n   \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "api/web/tickets/:id",
    "title": "3. Show ticket",
    "version": "1.0.0",
    "name": "Show_Ticket",
    "group": "Ticket",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"id\": 6,\n   \"price\": 12,\n   \"movie\": \"Amarsi un po'...\",\n   \"seatType\": \"VIP\",\n   \"seatName\": \"A3\",\n   \"theaterName\": \"Hall 3\",\n   \"cinemaName\": \"Turing Niptict\",\n   \"userName\": \"Sophanon Chhoun\",\n   \"checked_in\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ticket.js",
    "groupTitle": "Ticket",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000/api/web/tickets/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ],
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"type\": \"ConstraintViolationError\"\n   \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
