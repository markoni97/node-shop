const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add product',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render('shop', {
    pageTitle: 'Shop',
    prods: products,
    path: '/shop',
  });
};
