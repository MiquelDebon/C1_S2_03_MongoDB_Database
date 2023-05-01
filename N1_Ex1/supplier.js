db.createCollection('supplier',{
    validator: {
        $jsonSchema : {
            bsonType: "object",
            title : "Supplier Validation",
            required : ["name", "direction", "phone", "fax", "nif"],
            properties : {
                name : {
                    bsonType : "string",
                    description : "this should be an string type and is required"
                },
                direction :{
                    bsonType : "object",
                    required : ["street", "number", "pis", "porta" ,"ciutat", "codi_postal", "pais"],
                    properties : {
                        street :{
                            bsonType : "string",
                            description : "this should be an string type and is required"
                        },
                        number :{
                            bsonType : "int",
                            description : "this should be an int type and is required"
                        },
                        pis :{
                            bsonType : "int",
                            description : "this should be an int type and is required"
                        },
                        porta :{
                            bsonType : "int",
                            description : "this should be an int type and is required"
                        },
                        ciutat : {
                            bsonType : "string",
                            description : "this should be an string type and is required"
                        },
                        codi_postal : {
                            bsonType : "string",
                            description : "this should be an string type and is required"
                        },
                        pais : {
                            bsonType : "string",
                            description : "this should be an string type and is required"
                        }
                    }
                },
                phone :{
                    bsonType : "string",
                    description : "this should be a string type and is required"
                },
                fax : {
                    bsonType : "string",
                    description : "this should be a string type and is required"
                },
                nif : {
                    bsonType : "string",
                    description : "this should be a string type and is required"
                }
            }
        }
    }
});