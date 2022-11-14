const Product = require('../models/product');

exports.getAdminProducts = (req, res, next) => {
  Product.fetchAll()
    .then((result) => {
      res.render('admin/product-list.ejs', {
        prods: result,
        path: '/admin/products',
      });
    })
    .catch((err) => console.log(err));
};

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product.ejs', {
    pageTitle: 'Add product',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res, next) => {
  const { title, prodImage, description, quantity, price } = req.body;
  const product = new Product(title, prodImage, description, quantity, price);

  product
    .save()
    .then((result) => {
      res.redirect('/admin/products');
    })
    .catch((err) => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const id = req.params.productId;
  Product.fetchProduct(id)
    .then((result) => {
      res.render('admin/edit-product.ejs', {
        pageTitle: `Edit ${result.title}`,
        product: result,
        path: '/admin/edit-product',
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const { title, prodImage, description, quantity, price, productId } =
    req.body;
  const product = new Product(
    title,
    prodImage,
    description,
    quantity,
    price,
    productId
  );
  product
    .save()
    .then((result) => {
      res.redirect('/admin/products');
    })
    .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const { productId } = req.body;
  Product.delete(productId)
    .then(() => {
      console.log('DELETED');
      res.redirect('/admin/products');
    })
    .catch((err) => console.log(err));
};
