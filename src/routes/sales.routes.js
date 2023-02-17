const express = require('express');
const salesController = require('../controllers/sales.controller');
const vSaleProductId = require('../middlewares/validateProductId');
const vSaleQuantity = require('../middlewares/validateProductQuantity');

const salesRouter = express.Router();

salesRouter.post('/', vSaleProductId, vSaleQuantity, salesController.insertSale);
salesRouter.get('/', salesController.getAllSales);

module.exports = salesRouter;