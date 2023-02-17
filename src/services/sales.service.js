const salesModel = require('../models/sales.model');

const insertSale = async (newSale) => {
  const saleProductId = await salesModel.findProductIdSales(newSale);
  // console.log('estou aqui', newSale);
  //   console.log('oiiiiiiiii', saleProductId);

  if (saleProductId.length !== newSale.length) {
    return { type: 404, message: 'Product not found' };
  }
  const saleDone = await salesModel.insertSale(newSale);
  // console.log('alooooooo', saleDone);
  return saleDone;
};  

const getAllSales = async () => {
  const getSales = await salesModel.getAllSales();
  console.log('estou aqui agora', getSales);
  return getSales;
};

module.exports = {
  insertSale,
  getAllSales,
};