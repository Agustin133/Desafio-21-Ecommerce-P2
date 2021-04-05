const express = require('express');
const { route } = require('./products.route');
const router = new express.Router();
const productsRoute = require('./products.route');
const cartRoute = require('./carts.route');

router.use('/products', productsRoute);
router.use('/cart', cartRoute);

module.exports = router;