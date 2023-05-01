db.createCollection('product_order',{
    validator: {
        $jsonSchema : {
            bsonType: "object",
            title : "Employee Validation",
            required : ["order_id", "product_id"],
            properties : {
                order_id : {
                    bsonType : "objectId",
                    description : "this should be an objectId type and is required"
                },
                product_id : {
                    bsonType : "objectId",
                    description : "this should be an objectId type and is required"
                }
            }
        }
    }
});