define({ "api": [
  {
    "type": "post",
    "url": "/api/login",
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
        "url": "http://165.227.93.1:7000/api/login"
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
    "url": "/api/login/google",
    "title": "3. Login Google",
    "version": "1.0.0",
    "name": "Login_Google",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Account Token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n   \"token\": \"ya29.a0ARrdaM8FStqs8Dhyru2OPJG7AOYSUhF_ehYN0G4SPytlpBysFZMSBAhO8OQ12Qvk5VYwayXKa3ZZ6EIwYnbfTKfPOM36aZhh6x6TK-nDcFTUDYppKHOe9RJQ0EQ5g_Xyumq-eUV8Z1he6tuoSezH3_p9ccyn\"\n}",
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
        "url": "http://165.227.93.1:7000/api/login/google"
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
    "url": "/api/register",
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
        "url": "http://165.227.93.1:7000/api/register"
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
    "type": "put",
    "url": "/api/reset-password",
    "title": "6. Reset Password",
    "version": "1.0.0",
    "name": "Reset_Password",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n   \"userId\": 7,\n   \"password\": \"password\"\n}",
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
          "content": "HTTP/1.1 200 Success Request\n{\n   \"message\": \"Password reset successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Authentication.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://165.227.93.1:7000/api/reset-password"
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
    "type": "post",
    "url": "/api/send-mail",
    "title": "4. Send Mail for reset code",
    "version": "1.0.0",
    "name": "Send_Mail_For_Reset_Code",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n   \"email\": \"chhounsophanon6@gmail.com\",\n}",
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
          "content": "HTTP/1.1 200 Success Request\n{\n   \"email\": \"sothyrith.hy@student.niptict.edu.kh\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Authentication.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://165.227.93.1:7000/api/send-mail"
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
    "type": "post",
    "url": "/api/verify-code",
    "title": "5. Verify Code",
    "version": "1.0.0",
    "name": "Verify_Code",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n    \"code\": \"1B7C4zMi\"\n}",
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
          "content": "HTTP/1.1 200 Success Request\n{\n   \"userId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Authentication.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://165.227.93.1:7000/api/verify-code"
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
    "url": "/api/cinemas",
    "title": "1. List cinemas",
    "version": "1.0.0",
    "name": "List_cinemas",
    "group": "Cinemas",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n[\n   {\n       \"id\": 6,\n       \"name\": \"xssadcx\",\n       \"location\": \"cwcwec\",\n       \"status\": true,\n       \"photo\": \"http://127.0.0.1:8000/uploads/images/5ec06e8af64a65511a2a77154443540f.png\"\n   },\n   {\n       \"id\": 5,\n       \"name\": \"m m\",\n       \"location\": \"xwxwe\",\n       \"status\": true,\n       \"photo\": \"http://127.0.0.1:8000/uploads/images/ce6045b991b61167aad1a738b5b49bfd.png\"\n   },\n   {\n       \"id\": 4,\n       \"name\": \"Turing TK\",\n       \"location\": \"PP TK \",\n       \"status\": true,\n       \"photo\": \"http://127.0.0.1:8000/uploads/images/1a2283800e9ac5bfdcc25f7ebae3f380.png\"\n   },\n   {\n       \"id\": 1,\n       \"name\": \"Turing CADT\",\n       \"location\": \"CADT\",\n       \"status\": true,\n       \"photo\": \"http://127.0.0.1:8000/uploads/images/a2f3f14884bf61d0a9bea8b437d273bf.png\"\n   },\n   {\n       \"id\": 2,\n       \"name\": \"Turing Niptict\",\n       \"location\": \"Niptict\",\n       \"status\": true,\n       \"photo\": \"http://127.0.0.1:8000/uploads/images/c983b6c44b15235e2c93aca24af01f8a.png\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./cinemas.js",
    "groupTitle": "Cinemas",
    "sampleRequest": [
      {
        "url": "http://165.227.93.1:7000/api/cinemas"
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
    "url": "/api/currency",
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
        "url": "http://165.227.93.1:7000/api/currency"
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
    "url": "/api/grid/:screening_id",
    "title": "1. List Grid",
    "version": "1.0.0",
    "name": "List_Grid",
    "group": "Grid",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"screeningId\": \"7\",\n   \"cinemaName\": \"\",\n   \"theatreName\": \"Hall 3\",\n   \"movieName\": \"Amarsi un po'...\",\n   \"row\": 5,\n   \"col\": 5,\n   \"seatTypes\": [\n       {\n           \"id\": 2,\n           \"name\": \"VIP\",\n           \"priceFactor\": 3,\n           \"status\": true,\n           \"created_at\": \"2021-08-11T16:51:42.000000Z\",\n           \"updated_at\": \"2021-08-17T14:59:38.000000Z\",\n           \"color\": \"#F39C19\"\n       },\n       {\n           \"id\": 5,\n           \"name\": \"Premium\",\n           \"priceFactor\": 5,\n           \"status\": true,\n           \"created_at\": \"2021-08-13T06:59:45.000000Z\",\n           \"updated_at\": \"2021-08-17T14:59:20.000000Z\",\n           \"color\": \"#3398DB\"\n       }\n   ],\n   \"startTime\": \"18:00:00\",\n   \"date\": \"2021-08-13\",\n   \"movieSub\": \"Khmer/Cambodian\",\n   \"movieDub\": \"English\",\n   \"grid\": [\n       [\n           {\n               \"id\": 101,\n               \"name\": \"A1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 0\n           },\n           {\n               \"id\": 102,\n               \"name\": \"A2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 0\n           },\n           {\n               \"id\": 103,\n               \"name\": \"A3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 0\n           },\n           {\n               \"id\": 104,\n               \"name\": \"A4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 0\n           },\n           {\n               \"id\": 105,\n               \"name\": \"A5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 0\n           },\n           {\n               \"id\": 6,\n               \"name\": \"A6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 0\n           },\n           {\n               \"id\": 7,\n               \"name\": \"A7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 0\n           },\n           {\n               \"id\": 8,\n               \"name\": \"A8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 0\n           },\n           {\n               \"id\": 9,\n               \"name\": \"A9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 0\n           },\n           {\n               \"id\": 10,\n               \"name\": \"A10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 0\n           }\n       ],\n       [\n           {\n               \"id\": 106,\n               \"name\": \"B1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 1\n           },\n           {\n               \"id\": 107,\n               \"name\": \"B2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 1\n           },\n           {\n               \"id\": 108,\n               \"name\": \"B3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 1\n           },\n           {\n               \"id\": 109,\n               \"name\": \"B4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 1\n           },\n           {\n               \"id\": 110,\n               \"name\": \"B5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 1\n           },\n           {\n               \"id\": 16,\n               \"name\": \"B6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 1\n           },\n           {\n               \"id\": 17,\n               \"name\": \"B7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 1\n           },\n           {\n               \"id\": 18,\n               \"name\": \"B8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 1\n           },\n           {\n               \"id\": 19,\n               \"name\": \"B9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 1\n           },\n           {\n               \"id\": 20,\n               \"name\": \"B10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 1\n           }\n       ],\n       [\n           {\n               \"id\": 111,\n               \"name\": \"C1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 2\n           },\n           {\n               \"id\": 112,\n               \"name\": \"C2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 2\n           },\n           {\n               \"id\": 113,\n               \"name\": \"C3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 2\n           },\n           {\n               \"id\": 114,\n               \"name\": \"C4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 2\n           },\n           {\n               \"id\": 115,\n               \"name\": \"C5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 2\n           },\n           {\n               \"id\": 26,\n               \"name\": \"C6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 2\n           },\n           {\n               \"id\": 27,\n               \"name\": \"C7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 2\n           },\n           {\n               \"id\": 28,\n               \"name\": \"C8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 2\n           },\n           {\n               \"id\": 29,\n               \"name\": \"C9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 2\n           },\n           {\n               \"id\": 30,\n               \"name\": \"C10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 2\n           }\n       ],\n       [\n           {\n               \"id\": 116,\n               \"name\": \"D1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 3\n           },\n           {\n               \"id\": 117,\n               \"name\": \"D2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 3\n           },\n           {\n               \"id\": 118,\n               \"name\": \"D3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 3\n           },\n           {\n               \"id\": 119,\n               \"name\": \"D4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 3\n           },\n           {\n               \"id\": 120,\n               \"name\": \"D5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 3\n           },\n           {\n               \"id\": 36,\n               \"name\": \"D6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 3\n           },\n           {\n               \"id\": 37,\n               \"name\": \"D7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 3\n           },\n           {\n               \"id\": 38,\n               \"name\": \"D8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 3\n           },\n           {\n               \"id\": 39,\n               \"name\": \"D9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 3\n           },\n           {\n               \"id\": 40,\n               \"name\": \"D10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 3\n           }\n       ],\n       [\n           {\n               \"id\": 121,\n               \"name\": \"E1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 4\n           },\n           {\n               \"id\": 122,\n               \"name\": \"E2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 4\n           },\n           {\n               \"id\": 123,\n               \"name\": \"E3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 4\n           },\n           {\n               \"id\": 124,\n               \"name\": \"E4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 4\n           },\n           {\n               \"id\": 125,\n               \"name\": \"E5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 4\n           },\n           {\n               \"id\": 46,\n               \"name\": \"E6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 4\n           },\n           {\n               \"id\": 47,\n               \"name\": \"E7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 4\n           },\n           {\n               \"id\": 48,\n               \"name\": \"E8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 4\n           },\n           {\n               \"id\": 49,\n               \"name\": \"E9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 4\n           },\n           {\n               \"id\": 50,\n               \"name\": \"E10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 4\n           }\n       ],\n       [\n           {\n               \"id\": 51,\n               \"name\": \"F1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 5\n           },\n           {\n               \"id\": 52,\n               \"name\": \"F2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 5\n           },\n           {\n               \"id\": 53,\n               \"name\": \"F3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 5\n           },\n           {\n               \"id\": 54,\n               \"name\": \"F4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 5\n           },\n           {\n               \"id\": 55,\n               \"name\": \"F5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 5\n           },\n           {\n               \"id\": 56,\n               \"name\": \"F6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 5\n           },\n           {\n               \"id\": 57,\n               \"name\": \"F7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 5\n           },\n           {\n               \"id\": 58,\n               \"name\": \"F8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 5\n           },\n           {\n               \"id\": 59,\n               \"name\": \"F9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 5\n           },\n           {\n               \"id\": 60,\n               \"name\": \"F10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 5\n           }\n       ],\n       [\n           {\n               \"id\": 61,\n               \"name\": \"G1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 6\n           },\n           {\n               \"id\": 62,\n               \"name\": \"G2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 6\n           },\n           {\n               \"id\": 63,\n               \"name\": \"G3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 6\n           },\n           {\n               \"id\": 64,\n               \"name\": \"G4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 6\n           },\n           {\n               \"id\": 65,\n               \"name\": \"G5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 6\n           },\n           {\n               \"id\": 66,\n               \"name\": \"G6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 6\n           },\n           {\n               \"id\": 67,\n               \"name\": \"G7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 6\n           },\n           {\n               \"id\": 68,\n               \"name\": \"G8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 6\n           },\n           {\n               \"id\": 69,\n               \"name\": \"G9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 6\n           },\n           {\n               \"id\": 70,\n               \"name\": \"G10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 6\n           }\n       ],\n       [\n           {\n               \"id\": 71,\n               \"name\": \"H1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 7\n           },\n           {\n               \"id\": 72,\n               \"name\": \"H2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 7\n           },\n           {\n               \"id\": 73,\n               \"name\": \"H3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 7\n           },\n           {\n               \"id\": 74,\n               \"name\": \"H4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 7\n           },\n           {\n               \"id\": 75,\n               \"name\": \"H5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 7\n           },\n           {\n               \"id\": 76,\n               \"name\": \"H6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 7\n           },\n           {\n               \"id\": 77,\n               \"name\": \"H7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 7\n           },\n           {\n               \"id\": 78,\n               \"name\": \"H8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 7\n           },\n           {\n               \"id\": 79,\n               \"name\": \"H9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 7\n           },\n           {\n               \"id\": 80,\n               \"name\": \"H10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 7\n           }\n       ],\n       [\n           {\n               \"id\": 81,\n               \"name\": \"I1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 8\n           },\n           {\n               \"id\": 82,\n               \"name\": \"I2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 8\n           },\n           {\n               \"id\": 83,\n               \"name\": \"I3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 8\n           },\n           {\n               \"id\": 84,\n               \"name\": \"I4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 8\n           },\n           {\n               \"id\": 85,\n               \"name\": \"I5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 8\n           },\n           {\n               \"id\": 86,\n               \"name\": \"I6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 8\n           },\n           {\n               \"id\": 87,\n               \"name\": \"I7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 8\n           },\n           {\n               \"id\": 88,\n               \"name\": \"I8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 8\n           },\n           {\n               \"id\": 89,\n               \"name\": \"I9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 8\n           },\n           {\n               \"id\": 90,\n               \"name\": \"I10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 8\n           }\n       ],\n       [\n           {\n               \"id\": 91,\n               \"name\": \"J1\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 0,\n               \"row\": 9\n           },\n           {\n               \"id\": 92,\n               \"name\": \"J2\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 1,\n               \"row\": 9\n           },\n           {\n               \"id\": 93,\n               \"name\": \"J3\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 2,\n               \"row\": 9\n           },\n           {\n               \"id\": 94,\n               \"name\": \"J4\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 3,\n               \"row\": 9\n           },\n           {\n               \"id\": 95,\n               \"name\": \"J5\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 4,\n               \"row\": 9\n           },\n           {\n               \"id\": 96,\n               \"name\": \"J6\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 5,\n               \"row\": 9\n           },\n           {\n               \"id\": 97,\n               \"name\": \"J7\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 6,\n               \"row\": 9\n           },\n           {\n               \"id\": 98,\n               \"name\": \"J8\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 7,\n               \"row\": 9\n           },\n           {\n               \"id\": 99,\n               \"name\": \"J9\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 8,\n               \"row\": 9\n           },\n           {\n               \"id\": 100,\n               \"name\": \"J10\",\n               \"seatType\": {\n                   \"id\": 1,\n                   \"name\": \"VIP\",\n                   \"priceFactor\": 1.2,\n                   \"status\": true,\n                   \"created_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"updated_at\": \"2021-08-03T15:18:21.000000Z\",\n                   \"color\": \"#DAD5AB\"\n               },\n               \"status\": true,\n               \"booked\": false,\n               \"price\": 12,\n               \"col\": 9,\n               \"row\": 9\n           }\n       ]\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./grid.js",
    "groupTitle": "Grid",
    "sampleRequest": [
      {
        "url": "http://165.227.93.1:7000/api/grid/:screening_id"
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
    "url": "/api/movies",
    "title": "1. List Home Screen Movies",
    "version": "1.0.0",
    "name": "List_Home_Screen_Movies",
    "group": "Movie",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"upComingMovies\": [\n       {\n           \"id\": 6,\n           \"title\": \"Luca\",\n           \"synopsis\": \"Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.\",\n           \"poster\": \"/899f4521b6696ccbd27c4c5745fd4cf3.png\",\n           \"rated\": \"R\",\n           \"genres\": [\n               \"Romance\"\n           ]\n       }\n   ],\n   \"nowShowingMovies\": [\n       {\n           \"id\": 1,\n           \"title\": \"Luca\",\n           \"synopsis\": \"Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.\",\n           \"poster\": \"/0d618f1247426e147c0bcea07c920412.png\",\n           \"rated\": \"R\",\n           \"genres\": [\n               \"Romance\",\n               \"Romance\"\n           ]\n       },\n       {\n           \"id\": 3,\n           \"title\": \"Lukaku\",\n           \"synopsis\": \"Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.\",\n           \"poster\": \"/9ea74e626d95907565bd9b770efea257.png\",\n           \"rated\": \"R\",\n           \"genres\": [\n               \"Romance\"\n           ]\n       },\n       {\n           \"id\": 4,\n           \"title\": \"Amarsi un po'...\",\n           \"synopsis\": \"In an accident the young mechanic Marco Coccia meets Cristiana. The two fall in love with one another. Cristiana confesses only later that she is a genuine princess. For Marco it is not a problem, but for Cristiana's parents it is a very big problem. The two must separate. When one evening Cristiana calls Marco and lets him know about her forthcoming wedding, Marco with the car races toward Paris and has an accident...\",\n           \"poster\": \"/2128f05e206c139de322345264de68a1.png\",\n           \"rated\": \"R\",\n           \"genres\": [\n               \"Romance\"\n           ]\n       },\n       {\n           \"id\": 5,\n           \"title\": \"Lucasssxsxs\",\n           \"synopsis\": \"Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.\",\n           \"poster\": \"/c0960f8e50b73308ae874c1d7c49b8ad.png\",\n           \"rated\": \"R\",\n           \"genres\": [\n               \"Romance\",\n               \"Romance\"\n           ]\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./movie.js",
    "groupTitle": "Movie",
    "sampleRequest": [
      {
        "url": "http://165.227.93.1:7000/api/movies"
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
    "type": "post",
    "url": "/api/payments",
    "title": "1. Create Card",
    "version": "1.0.0",
    "name": "Create_Card",
    "group": "Payment",
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
        "content": " {\n    \"number\": \"4242424242424242\",\n    \"exp_month\": 8,\n    \"exp_year\": 2022,\n    \"cvc\": 314\n}",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n[\n{\n       \"id\": 1,\n       \"last4\": 4242,\n       \"brand\": \"Visa\",\n       \"country\": \"US\",\n       \"exp_month\": 8,\n       \"exp_year\": 2022\n   },\n{\n       \"id\": 2,\n       \"last4\": 4242,\n       \"brand\": \"Visa\",\n       \"country\": \"US\",\n       \"exp_month\": 8,\n       \"exp_year\": 2022\n   },\n{\n       \"id\": 3,\n       \"last4\": 4242,\n       \"brand\": \"Visa\",\n       \"country\": \"US\",\n       \"exp_month\": 8,\n       \"exp_year\": 2022\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./payment.js",
    "groupTitle": "Payment",
    "sampleRequest": [
      {
        "url": "http://165.227.93.1:7000/api/payments"
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
    "type": "delete",
    "url": "/api/payments/:id",
    "title": "3. Delete Payment Card",
    "version": "1.0.0",
    "name": "Delete_Payment_Card",
    "group": "Payment",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"messages\": \"Payment card already deleted.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./payment.js",
    "groupTitle": "Payment",
    "sampleRequest": [
      {
        "url": "http://165.227.93.1:7000/api/payments/:id"
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
    "url": "/api/payments",
    "title": "2. List Payment",
    "version": "1.0.0",
    "name": "List_Payment",
    "group": "Payment",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n[\n{\n       \"id\": 1,\n       \"last4\": 4242,\n       \"brand\": \"Visa\",\n       \"country\": \"US\",\n       \"exp_month\": 8,\n       \"exp_year\": 2022\n   },\n{\n       \"id\": 2,\n       \"last4\": 4242,\n       \"brand\": \"Visa\",\n       \"country\": \"US\",\n       \"exp_month\": 8,\n       \"exp_year\": 2022\n   },\n{\n       \"id\": 3,\n       \"last4\": 4242,\n       \"brand\": \"Visa\",\n       \"country\": \"US\",\n       \"exp_month\": 8,\n       \"exp_year\": 2022\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./payment.js",
    "groupTitle": "Payment",
    "sampleRequest": [
      {
        "url": "http://165.227.93.1:7000/api/payments"
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
    "url": "/api/products",
    "title": "1. List products",
    "version": "1.0.0",
    "name": "List_products",
    "group": "Products",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n[\n{\n       \"id\": 7,\n       \"name\": \"Corn\",\n       \"category\": \"Food\",\n       \"photo\": \"http://127.0.0.1:8000/uploads/images/8bbd46b404e98a1fdcf9ea0018c2e178.png\",\n       \"productVariants\": [\n           {\n               \"price\": 1,\n               \"code\": \"CS1\",\n               \"attributeValue\": [\n                   {\n                       \"id\": 10,\n                       \"name\": \"Flavor Spicy\"\n                   }\n               ]\n           }\n       ]\n   },\n{\n       \"id\": 2,\n       \"name\": \"Ice cream\",\n       \"category\": \"Food\",\n       \"photo\": \"http://127.0.0.1:8000/uploads/images/74fb578ceb4613350953c3f636f8e197.png\",\n       \"productVariants\": [\n           {\n               \"price\": 3,\n               \"code\": \"ILI\",\n               \"attributeValue\": [\n                   {\n                       \"id\": 4,\n                       \"name\": \"Size L\"\n                   },\n                   {\n                       \"id\": 7,\n                       \"name\": \"Type Ice\"\n                   }\n               ]\n           },\n           {\n               \"price\": 1,\n               \"code\": \"mmmj\",\n               \"attributeValue\": [\n                   {\n                       \"id\": 3,\n                       \"name\": \"Size M\"\n                   }\n               ]\n           }\n       ]\n   },\n{\n       \"id\": 1,\n       \"name\": \"Hot dog\",\n       \"category\": \"Food\",\n       \"photo\": \"http://127.0.0.1:8000/uploads/images/0b687a0e62cff6dfee21486aa752e693.png\",\n       \"productVariants\": [\n           {\n               \"price\": 250,\n               \"code\": \"1ass\",\n               \"attributeValue\": [\n                   {\n                       \"id\": 3,\n                       \"name\": \"Size M\"\n                   }\n               ]\n           }\n       ]\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./products.js",
    "groupTitle": "Products",
    "sampleRequest": [
      {
        "url": "http://165.227.93.1:7000/api/products"
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
    "url": "/api/profile",
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
        "url": "http://165.227.93.1:7000/api/profile"
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
    "url": "/api/profile",
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
        "url": "http://165.227.93.1:7000/api/profile"
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
    "url": "/api/profile",
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
        "url": "http://165.227.93.1:7000/api/profile"
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
    "url": "/api/screenings/now-showing",
    "title": "1. List Now Showing Screenings",
    "version": "1.0.0",
    "name": "List_Now_Showing_Screenings",
    "group": "Screening",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n[\n{\n       \"id\": 1,\n       \"name\": \"Turing CADT\",\n       \"location\": \"CADT\",\n       \"photo\": \"http://127.0.0.1:8000/uploads/images/a2f3f14884bf61d0a9bea8b437d273bf.png\",\n       \"movies\": [\n           {\n               \"id\": 4,\n               \"title\": \"Amarsi un po'...\",\n               \"trailerUrl\": \"VanCRj8eI9o\",\n               \"synopsis\": \"In an accident the young mechanic Marco Coccia meets Cristiana. The two fall in love with one another. Cristiana confesses only later that she is a genuine princess. For Marco it is not a problem, but for Cristiana's parents it is a very big problem. The two must separate. When one evening Cristiana calls Marco and lets him know about her forthcoming wedding, Marco with the car races toward Paris and has an accident...\",\n               \"runningTime\": 93,\n               \"rating\": \"R\",\n               \"poster\": \"/2128f05e206c139de322345264de68a1.png\",\n               \"backdrop\": \"/324b32eb18b57269835c435fb9c5242a.png\",\n               \"casts\": [\n                   {\n                       \"id\": 1,\n                       \"name\": \"Neath Mony\"\n                   }\n               ],\n               \"genres\": [\n                   {\n                       \"id\": 1,\n                       \"name\": \"Romance\"\n                   }\n               ],\n               \"directors\": [\n                   {\n                       \"id\": 1,\n                       \"name\": \"Neath Mony\"\n                   }\n               ],\n               \"screenings\": {\n                   \"2021-08-30\": [\n                       {\n                           \"id\": 7,\n                           \"movieId\": 4,\n                           \"price\": 10,\n                           \"theaterId\": 2,\n                           \"date\": \"2021-08-30\",\n                           \"start_time\": \"09:33:00\",\n                           \"status\": true,\n                           \"created_at\": \"2021-08-07T02:34:11.000000Z\",\n                           \"updated_at\": \"2021-08-12T07:02:57.000000Z\",\n                           \"subId\": 1,\n                           \"dubId\": 2\n                       }\n                   ]\n               }\n           }\n       ]\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./screening.js",
    "groupTitle": "Screening",
    "sampleRequest": [
      {
        "url": "http://165.227.93.1:7000/api/screenings/now-showing"
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
    "url": "/api/tickets",
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
        "content": "{\n   \"screeningId\": \"7\",\n   \"cinemaName\": \"Turing Niptict\",\n   \"theatreName\": \"Hall 3\",\n   \"movieName\": \"Amarsi un po'...\",\n   \"seats\": [\n       1,2,3\n   ],\n   \"paymentId\": 1\n}",
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
        "url": "http://165.227.93.1:7000/api/tickets"
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
    "url": "/api/tickets",
    "title": "2. List Ticket",
    "version": "1.0.0",
    "name": "List_Ticket",
    "group": "Ticket",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n[\n{\n       \"id\": \"3312f5ec-425b-4db3-b9a5-824a88010391\",\n       \"price\": 12,\n       \"seat\": \"A2\",\n       \"customer\": \"Customer walk in\",\n       \"theatre\": \"Hall 3\",\n       \"checkedIn\": false,\n       \"movie\": {\n           \"id\": 4,\n           \"title\": \"Amarsi un po'...\",\n           \"trailer\": \"VanCRj8eI9o\",\n           \"synopsis\": \"In an accident the young mechanic Marco Coccia meets Cristiana. The two fall in love with one another. Cristiana confesses only later that she is a genuine princess. For Marco it is not a problem, but for Cristiana's parents it is a very big problem. The two must separate. When one evening Cristiana calls Marco and lets him know about her forthcoming wedding, Marco with the car races toward Paris and has an accident...\",\n           \"rating\": \"R\",\n           \"genres\": [\n               {\n                   \"id\": 1,\n                   \"name\": \"Romance\"\n               }\n           ],\n           \"directors\": [\n               {\n                   \"id\": 1,\n                   \"name\": \"Neath Mony\"\n               }\n           ],\n           \"casts\": [\n               {\n                   \"id\": 1,\n                   \"name\": \"Neath Mony\"\n               }\n           ],\n           \"releasedDate\": \"2021-08-11\",\n           \"poster\": \"/2128f05e206c139de322345264de68a1.png\",\n           \"backdrop\": \"/324b32eb18b57269835c435fb9c5242a.png\"\n       },\n       \"screening\": {\n           \"id\": 7,\n           \"theatre\": \"Hall 3\",\n           \"date\": \"2021-08-30\",\n           \"start_time\": \"09:33:00\"\n       },\n       \"cinema\": {\n           \"id\": 1,\n           \"name\": \"Turing CADT\",\n           \"location\": \"CADT\",\n           \"photo\": \"http://127.0.0.1:8000/uploads/images/a2f3f14884bf61d0a9bea8b437d273bf.png\"\n       }\n   },\n{\n       \"id\": \"57250088-3cb5-4fdf-9529-c0103536ccfb\",\n       \"price\": 12,\n       \"seat\": \"A1\",\n       \"customer\": \"Customer walk in\",\n       \"theatre\": \"Hall 3\",\n       \"checkedIn\": false,\n       \"movie\": {\n           \"id\": 4,\n           \"title\": \"Amarsi un po'...\",\n           \"trailer\": \"VanCRj8eI9o\",\n           \"synopsis\": \"In an accident the young mechanic Marco Coccia meets Cristiana. The two fall in love with one another. Cristiana confesses only later that she is a genuine princess. For Marco it is not a problem, but for Cristiana's parents it is a very big problem. The two must separate. When one evening Cristiana calls Marco and lets him know about her forthcoming wedding, Marco with the car races toward Paris and has an accident...\",\n           \"rating\": \"R\",\n           \"genres\": [\n               {\n                   \"id\": 1,\n                   \"name\": \"Romance\"\n               }\n           ],\n           \"directors\": [\n               {\n                   \"id\": 1,\n                   \"name\": \"Neath Mony\"\n               }\n           ],\n           \"casts\": [\n               {\n                   \"id\": 1,\n                   \"name\": \"Neath Mony\"\n               }\n           ],\n           \"releasedDate\": \"2021-08-11\",\n           \"poster\": \"/2128f05e206c139de322345264de68a1.png\",\n           \"backdrop\": \"/324b32eb18b57269835c435fb9c5242a.png\"\n       },\n       \"screening\": {\n           \"id\": 7,\n           \"theatre\": \"Hall 3\",\n           \"date\": \"2021-08-30\",\n           \"start_time\": \"09:33:00\"\n       },\n       \"cinema\": {\n           \"id\": 1,\n           \"name\": \"Turing CADT\",\n           \"location\": \"CADT\",\n           \"photo\": \"http://127.0.0.1:8000/uploads/images/a2f3f14884bf61d0a9bea8b437d273bf.png\"\n       }\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./ticket.js",
    "groupTitle": "Ticket",
    "sampleRequest": [
      {
        "url": "http://165.227.93.1:7000/api/tickets"
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
    "url": "/api/tickets/:id",
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
        "url": "http://165.227.93.1:7000/api/tickets/:id"
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
