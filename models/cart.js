const fs = require('fs');
const path = require('path');
const root = require('../util/path');
const file = require('../util/file');

const p = path.join(root, 'data', 'cart.json');

module.exports = class Cart {
  static async addToCart(id) {
    const products = await file.getDataFromFile(p);
    const prodIndex = products.findIndex(prod = prod.id === id);
    const existingItem = products[prodIndex];
    let cartItems = []
    if(existingItem) {
      
      cartItems = products.concat()
    }
  }
}