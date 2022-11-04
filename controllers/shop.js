const Product = require('../models/product');

exports.getHomePage = (req, res, next) => {
  res.render('shop/index.ejs', { path: '/' });
};

exports.getProducts = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render('shop/product-list.ejs', {
    pageTitle: 'Shop',
    prods: products,
    path: '/products',
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart.ejs', { path: '/cart' });
};