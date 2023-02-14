const salesModel = require('../models/sales.model');

const insertSale = async (newSale) => {
  const saleProductId = await salesModel.findProductIdSales(newSale);
  // console.log('estou aqui', newSale);
  //   console.log('oiiiiiiiii', saleProductId);

  if (saleProductId.length !== newSale.length) {
    return { type: 404, message: 'Product not found' };
  }
  const saleDone = await salesModel.insertSale(newSale);
  console.log('alooooooo', saleDone);
  return saleDone;
};  

module.exports = {
  insertSale,
};