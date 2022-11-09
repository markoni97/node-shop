const Product = require('../models/product');

exports.getAdminProducts = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render('admin/product-list.ejs', {
    prods: products,
    path: '/admin/products',
  });
};

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product.ejs', {
    pageTitle: 'Add product',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res, next) => {
  const { title, prodImage, description, price } = req.body;
  const id = Math.floor(Math.random() * 100_000);
  const product = new Product(id, title, prodImage, description, price);
  product.save();
  res.redirect('/');
};
