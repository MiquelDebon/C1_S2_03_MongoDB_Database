db.createCollection('order',{
    validator: {
        $jsonSchema : {
            bsonType: "object",
            title : "Employee Validation",
            required : ["order_datetime", "pickup_restaurant", "amount_pizza", "amount_hamburguer", "amount_drink", "employee_id", "employee_delivery_id", "pizzeria_shop_id", "client_id", "total_price"],
            properties : {
                order_datetime : {
                    bsonType : "date",
                    description : "this should be an date type and is required"
                },
                pickup_restaurant : {
                    bsonType : "string",
                    "enum" : ["pickup", "restaurant"],
                    description : "this should be 'pickup' or 'restaurant' and is required"
                },
                amount_pizza : {
                    bsonType : "int",
                    description : "this should be an int type and is required"
                },
                amount_hamburguer : {
                    bsonType : "int",
                    description : "this should be an int type and is required"
                },
                amount_drink : {
                    bsonType : "int",
                    description : "this should be an date type and is required"
                },
                employee_id : {
                    bsonType : "objectId",
                    description : "this should be an object type and is required"
                },
                employee_delivery_id : {
                    bsonType : "objectId",
                    description : "this should be an objectId type and is required"
                },
                pizzeria_shop_id : {
                    bsonType : "objectId",
                    description : "this should be an objectId type and is required"
                },
                client_id : {
                    bsonType : "objectId",
                    description : "this should be an objectId type and is required"
                },
                total_price : {
                    bsonType : "int",
                    description : "this should be an int type and is required"
                }
            }
        }
    }
});