db.client.insertMany([{
    _id: ObjectId("000000000000000000000001"),
    "nom": "Omar",
    "cognom": "Olmedo",
    address_id: ObjectId("000000000000000000000003")
  },
  {
    _id: ObjectId("000000000000000000000002"),
    "nom": "Cristina",
    "cognom": "Carrillo",
    address_id: ObjectId("000000000000000000000004")
  }])
  
db.address.insertMany([{
    _id: ObjectId("000000000000000000000003"),
    "poblacio": "Piera"
  },
  {
    _id: ObjectId("000000000000000000000004"),
    "poblacio": "Sant Cugat"
  }])