db.createCollection('sale',{
    validator: {
        $jsonSchema : {
            bsonType: "object",
            title : "Sales Validation",
            required : ["client_id", "product_id", "employee_id"],
            properties : {
                client_id : {
                    bsonType : "objectId",
                    description : "this should be an object type and is required"
                },
                product_id : {
                    bsonType : "objectId",
                    description : "this should be an object type and is required"
                },
                employee_id : {
                    bsonType : "objectId",
                    description : "this should be an object type and is required"
                }
            }
        }
    }
});
