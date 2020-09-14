const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products = adminData.productArry;
  res.render("shop", {prods : products, docTitle : "shop", path : "/"});
  console.log("shop", adminData.productArry)
});

module.exports = router;
