// clients amb productes i direccions
db.client.insertMany([{
    _id: ObjectId("000000000000000000000001"),
    "nom": "Omar",
    "cognom": "Olmedo",
    address_id: ObjectId("000000000000000000000003"),
    "orders": [{
      "date": new Date("20-08-2022"),
      "products": [ObjectId("000000000000000000000005"), ObjectId("000000000000000000000007")]
    },{
      "date": new Date("15-09-2022"),
      "products": [ObjectId("000000000000000000000006"), ObjectId("000000000000000000000007")]
    }]
  },
  {
    _id: ObjectId("000000000000000000000002"),
    "nom": "Cristina",
    "cognom": "Carrillo",
    address_id: ObjectId("000000000000000000000004"),
    "orders": [{
      "date": new Date("05-08-2022"),
      "products": [ObjectId("000000000000000000000005"), ObjectId("000000000000000000000006"), ObjectId("000000000000000000000007"), ObjectId("000000000000000000000007")]
    }]
  }])
  
// direccions
db.address.insertMany([{
    _id: ObjectId("000000000000000000000003"),
    "poblacio": "Piera"
  },
  {
    _id: ObjectId("000000000000000000000004"),
    "poblacio": "Sant Cugat"
  }])

// productes
db.products.insertMany([{
  _id: ObjectId("000000000000000000000005"),
  "name": "Hamburguesa",
  "price": 8
},{
  _id: ObjectId("000000000000000000000006"),
  "name": "Hot dog",
  "price": 3
},{
  _id: ObjectId("000000000000000000000007"),
  "name": "Coca cola",
  "price": 1.5
}])