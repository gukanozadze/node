const {MongoClient, ObjectID} = require('mongodb')

const connectionUrl = 'mongodb://localhost:27017'
const dbName = 'names-db'


MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

  const db = client.db(dbName)

  db.collection('users').insertOne({
    name: 'Saba'
  }).then((result) => {
    console.log(result.ops) 
  }).catch((err) => {
    console.log(err)
  })


})