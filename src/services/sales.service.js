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
  // console.log('estou aqui agora', getSales);
  return getSales;
};

const getSalesById = async (id) => {
  const getSale = await salesModel.getSalesById(id);
  console.log('flamengoo', getSale);
  if (getSale.length === 0) {
    return { type: 404, message: 'Sale not found' };
  }
      return { type: 200, message: getSale };
};

module.exports = {
  insertSale,
  getAllSales,
  getSalesById,
};