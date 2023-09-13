if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}


//const mongoose = require('mongoose');
const mongodb = require('mongodb');
//const dbURL = mongodb.connect('mongodb://127.0.0.1:27017/online-shop');
const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb://127.0.0.1:27017/online-shop', { useUnifiedTopology: true });
  database = client.db('online-shop');
}

function getDb() {
  if (!database) {
    throw new Error('You must connect first!');
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
};