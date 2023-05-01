db.createCollection('brand',{
    validator: {
        $jsonSchema : {
            bsonType: "object",
            title : "Brand Validation",
            required : ["name", "supplier_id"],
            properties : {
                name : {
                    bsonType : "string",
                    description : "this should be an string type and is required"
                },
                supplier_id : {
                    bsonType : "objectId",
                    description :  "this should be an objectId type and is required"
                }
            }
        }
    }
});
