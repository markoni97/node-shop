const Product = require('../models/product');

exports.getHomePage = (req, res, next) => {
  res.render('shop/index.ejs', { path: '/', pageTitle: 'Tech Shop' });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((result) => {
      res.render('shop/product-list.ejs', {
        pageTitle: 'Shop',
        prods: result,
        path: '/products',
      });
    })
    .catch((err) => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const id = req.params.productId;
  Product.fetchProduct(id)
    .then((result) => {
      res.render('shop/product-detail.ejs', {
        product: result,
        pageTitle: `Tech Shop | ${result.title}`,
        path: '/products',
      });
    })
    .catch((err) => console.log(err));
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart.ejs', { path: '/cart' });
};

exports.postCart = (req, res, next) => {};
