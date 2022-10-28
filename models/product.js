const fs = require('fs');
const path = require('path');
const root = require('../util/path');
const file = require('../util/file');

const p = path.join(root, 'data', 'products.json');

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  async save() {
    const products = await file.getDataFromFile(p);
    products.push({ title: this.title });
    fs.writeFile(p, JSON.stringify(products), (err) => {
      console.log(err);
    });
  }

  static async fetchAll() {
    return await file.getDataFromFile(p);
  }
};
