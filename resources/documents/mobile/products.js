/**
 * @api {get} /api/products 1. List products
 * @apiVersion 1.0.0
 * @apiName List products
 * @apiGroup Products
 *
 * @apiUse GetHeaderWithoutAuth
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 [
 {
        "id": 7,
        "name": "Corn",
        "category": "Food",
        "photo": "http://127.0.0.1:8000/uploads/images/8bbd46b404e98a1fdcf9ea0018c2e178.png",
        "productVariants": [
            {
                "price": 1,
                "code": "CS1",
                "attributeValue": [
                    {
                        "id": 10,
                        "name": "Flavor Spicy"
                    }
                ]
            }
        ]
    },
 {
        "id": 2,
        "name": "Ice cream",
        "category": "Food",
        "photo": "http://127.0.0.1:8000/uploads/images/74fb578ceb4613350953c3f636f8e197.png",
        "productVariants": [
            {
                "price": 3,
                "code": "ILI",
                "attributeValue": [
                    {
                        "id": 4,
                        "name": "Size L"
                    },
                    {
                        "id": 7,
                        "name": "Type Ice"
                    }
                ]
            },
            {
                "price": 1,
                "code": "mmmj",
                "attributeValue": [
                    {
                        "id": 3,
                        "name": "Size M"
                    }
                ]
            }
        ]
    },
 {
        "id": 1,
        "name": "Hot dog",
        "category": "Food",
        "photo": "http://127.0.0.1:8000/uploads/images/0b687a0e62cff6dfee21486aa752e693.png",
        "productVariants": [
            {
                "price": 250,
                "code": "1ass",
                "attributeValue": [
                    {
                        "id": 3,
                        "name": "Size M"
                    }
                ]
            }
        ]
    }
 ]
 *
 * @apiUse ServerServerError
 */
