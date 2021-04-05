const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router
    .route('/:id').get(cartController.getById);

router
    .route('/').get(cartController.getAll);

router
    .route('/').post(cartController.addProduct);

router
    .route('/:id').delete(cartController.deleteProduct);


module.exports = router;