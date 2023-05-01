db.createCollection('employee',{
    validator: {
        $jsonSchema : {
            bsonType: "object",
            title : "Employee Validation",
            required : ["name"],
            properties : {
                name : {
                    bsonType : "string",
                    description : "this should be an string type and is required"
                }
            }
        }
    }
});
