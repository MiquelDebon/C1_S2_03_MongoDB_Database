db.createCollection('product',{
    validator: {
        $jsonSchema : {
            bsonType: "object",
            title : "Employee Validation",
            required : ["name", "price"],
            properties : {
                name : {
                    bsonType : "string",
                    description : "this should be a string type and is required"
                },
                pizza_category : {
                    bsonType : "objectId",
                    description : "this should be a string type"
                },
                description : {
                    bsonType : "string",
                    description : "this should be a string type"
                },
                image : {
                    bsonType : "string",
                    description : "this should be a string type"
                },
                price : {
                    bsonType : "int",
                    description : "this should be an int and is required"
                }

            }
        }
    }
});