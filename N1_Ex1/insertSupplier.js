db.supplier.insertMany([
    {name : "Miquel", 
    direction : {
        street : "consell de cent",
        number : "482",
        pis : "2",
        porta : "1",
        cosdi_postal : "08013",
        pais : "spain"
    },
    phone : "610264001",
    fax : "c4f432dd",
    nif : "46415331"
    },
    {name : "Marta", 
    direction : {
        street : "consell de cent",
        number : 243,
        pis : 2,
        porta : 1,
        cosdi_postal : "08017",
        pais : "Madrid"
    },
    phone : "600264001",
    fax : "52qs432dd",
    nif : "40415331"
    }
]);


db.supplier.insertOne({
    name : "Miquel", 
    direction : {
        street : "consell de cent",
        number : 382,
        pis : 2,
        porta : 1,
        cosdi_postal : "08013",
        pais : "spain"
    },
    phone : "600264001",
    fax : "52qs432dd",
    nif : "40415331"
});

// somthing is wrong