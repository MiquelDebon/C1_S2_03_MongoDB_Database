db.createCollection('product',{
    validator: {
        $jsonSchema : {
            bsonType: "object",
            required : ["brand", "graduation", "frame", "frame_color", "glass_color", "price", "supplier_id"],
            properties : {
                brand : {
                    bsonType : "objectId",
                    description : "this should be an objectId type and is required"
                },
                graduation :{
                    bsonType : "int",
                    description : "this should be an int type and is required"
                },
                frame :{
                    bsonType : "string",
                    description : "this should be a string type and is required"
                },
                frame_color : {
                    bsonType : "string",
                    description : "this should be a string type and is required"
                },
                glass_color : {
                    bsonType : "string",
                    description : "this should be a string type and is required"
                },
                price : {
                    bsonType : "int",
                    description : "this should be an int type and is required"
                },
                supplier_id : {
                    bsonType : "objectId",
                    description : "this should be an objectId type and is required"
                }

            }

        }
    }

});