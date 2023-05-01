db.createCollection('pizzeria_shop',{
    validator: {
        $jsonSchema : {
            bsonType: "object",
            title : "Employee Validation",
            required : ["direction", "cp", "location", "province"],
            properties : {
                direction : {
                    bsonType : "string",
                    description : "this should be an string type and is required"
                },
                cp : {
                    bsonType : "int",
                    description : "this should be an int type and is required"
                },
                location : {
                    bsonType : "string",
                    description : "this should be an string type and is required"
                },
                province : {
                    bsonType : "string",
                    description : "this should be an string type and is required"
                }
            }
        }
    }
});