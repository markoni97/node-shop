const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;

const mongoClient = (callback) => {
  MongoClient.connect(
    'mongodb+srv://ghost97:Ma1zLd6Oux9f85k8@cluster0.izyf28a.mongodb.net/?retryWrites=true&w=majority'
  )
    .then((client) => {
      console.log('Connected')
      _db = client.db('tech-shop');
      callback();
    })
    .catch((err) => {
      console.log('util err', err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  } else {
    throw 'No database found';
  }
};

exports.mongoClient = mongoClient;
exports.getDb = getDb;
