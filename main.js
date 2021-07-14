const product_attribute=[
    {
        "id": 1,
        "name": "size",
        "status": 1,
    },
    {
        "id": 2,
        "name": "flavor",
        "status": 1,
    }
]
//product_attribute hasOnetoMany product_attribute_value
const product_attribute_value=[
    {
        "id":1,
        "name": "Large",
        "product_attribute":{
            "id": 1,
            "name": "size",
            "status": 1,
        }
    },
    {
        "id":2,
        "name": "hot",
        "product_attribute":{
            "id": 1,
            "name": "flavor",
            "status": 1,
        }
    }
]

