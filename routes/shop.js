const express = require('express');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop', {
    pageTitle: 'Shop',
    prods: adminData.products,
    path: '/shop',
  });
});

module.exports = router;
