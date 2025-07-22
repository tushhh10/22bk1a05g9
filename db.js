const { MongoClient } = require('mongodb');

const MONGO_URI = 'mongodb://Hostlocalhost:27017/Shorturl';

MongoClient.connect(MONGO_URI, function(err, client) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected successfully to MongoDB");

    const db = client.db();
    module.exports = { client: client, db: db };
  }
});