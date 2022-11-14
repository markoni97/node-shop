const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;
module.exports = class Product {
  constructor(title, prodImage, description, quantity, price, id) {
    this.title = title;
    this.prodImage = prodImage;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }

  save() {
    const db = getDb();
    let dbOps;

    if (this._id) {
      dbOps = db
        .collection('products')
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOps = db.collection('products').insertOne(this);
    }
    return dbOps;
  }

  static fetchAll() {
    const db = getDb();
    return db.collection('products').find().toArray();
  }

  static fetchProduct(id) {
    const db = getDb();
    return db
      .collection('products')
      .find({ _id: new mongodb.ObjectId(id) })
      .next();
  }

  static delete(id) {
    const db = getDb();
    return db
      .collection('products')
      .deleteOne({ _id: new mongodb.ObjectId(id) });
  }
};
