db.createCollection('employee',{
    validator: {
        $jsonSchema : {
            bsonType: "object",
            title : "Employee Validation",
            required : ["name", "surname", "NIF", "phone", "section", "pizzeria_shop_id"],
            properties : {
                name : {
                    bsonType : "string",
                    description : "this should be an string type and is required"
                },
                surname : {
                    bsonType : "string",
                    description : "this should be an string type and is required"
                },
                NIF : {
                    bsonType : "string",
                    description : "this should be an string type and is required"
                },
                phone : {
                    bsonType : "string",
                    description : "this should be an string type and is required"
                },
                section : {
                    bsonType : "string",
                    enum : ["kitchen", "delivery"],
                    description : "this should be an string type and is required"
                },
                pizzeria_shop_id : {
                    bsonType : "objectId",
                    description : "this should be an objectId type and is required"
                }
            }
        }
    }
});