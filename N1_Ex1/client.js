db.createCollection('client',{
    validator: {
        $jsonSchema : {
            bsonType: "object",
            title : "Client Validation",
            required : ["name", "surname", "cp", "mail", "register_date", "by_client_id"],
            properties : {
                name : {
                    bsonType : "string",
                    description : "this should be an string type and is required"
                },
                surname : {
                    bsonType : "string",
                    description :  "this should be an string type and is required"
                },
                cp : {
                    bsonType : "string",
                    description :  "this should be an string type and is required"
                },
                mail : {
                    bsonType : "string",
                    description :  "this should be an string type and is required"
                },
                register_date : {
                    bsonType : "date",
                    description :  "this should be a date type and is required"
                },
                by_client_id :{
                    bsonType : "objectId",
                    description :  "this should be an object type and is required"
                }
            }
        }
    }
});