db.createCollection('client',{
    validator: {
        $jsonSchema : {
            bsonType: "object",
            title : "Employee Validation",
            required : ["name", "surname", "direction", "cp", "location_id", "phone"],
            properties : {
                name : {
                    bsonType : "string",
                    description : "this should be an string type and is required"
                },
                surname :{
                    bsonType : "string",
                    description : "this should be an string type and is required"
                },
                direction : {
                    bsonType : "string",
                    description : "this should be an string type and is required"
                },
                location_id : {
                    bsonType : "objectId",
                    description : "this should be an objectId type and is required"
                },
                phone : {
                    bsonType : "string",
                    description : "this should be an string type and is required"
                }
            }
        }
    }
});