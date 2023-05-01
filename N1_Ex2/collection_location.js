db.createCollection('location',{
    validator: {
        $jsonSchema : {
            bsonType: "object",
            title : "Employee Validation",
            required : ["name", "region_id"],
            properties : {
                name : {
                    bsonType : "string",
                    description : "this should be an string type and is required"
                },
                region_id : {
                    bsonType : "objectId",
                    description : "this should be an objectId type and is required"
                }
            }
        }
    }
});