const fs = require('fs');
const path = require('path');
const root = require('../util/path');
const file = require('../util/file');

const p = path.join(root, 'data', 'products.json');

module.exports = class Product {
  constructor(title, prodImage, description, price) {
    this.title = title;
    this.prodImage = prodImage;
    this.description = description;
    this.price = price;
  }

  async save() {
    const products = await file.getDataFromFile(p);
    console.log(this);
    products.push(this);
    fs.writeFile(p, JSON.stringify(products), (err) => {
      console.log(err);
    });
  }

  static async fetchAll() {
    return await file.getDataFromFile(p);
  }
};
