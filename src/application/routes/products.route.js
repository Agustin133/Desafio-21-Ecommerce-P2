const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router
    .route('/:id').get(productController.getById);

router
    .route('/').get(productController.getAll);

router
    .route('/').post(productController.addProduct);

router
    .route('/:id').put(productController.update);

router
    .route('/:id').delete(productController.deleteProduct);

router
    .route('/find/:data').get(productController.getProductByFilter);

router
    .route('/price/:num1/:num2').get(productController.getPiceByFilter);



module.exports = router;