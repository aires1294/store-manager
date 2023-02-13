const express = require('express');
const productsController = require('../controllers/products.controller');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAllProducts);

productsRouter.get('/:id', productsController.getProductById);

module.exports = productsRouter;