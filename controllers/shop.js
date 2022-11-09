const Product = require('../models/product');

exports.getHomePage = (req, res, next) => {
  res.render('shop/index.ejs', { path: '/', pageTitle: 'Tech Shop' });
};

exports.getProducts = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render('shop/product-list.ejs', {
    pageTitle: 'Shop',
    prods: products,
    path: '/products',
  });
};

exports.getProduct = async (req, res, next) => {
  const id = req.params.productId;
  const product = await Product.fetchProduct(parseInt(id));
  res.render('shop/product-detail.ejs', {
    product: product,
    pageTitle: `Tech Shop | ${product.title}`,
    path: '/products',
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart.ejs', { path: '/cart' });
};
