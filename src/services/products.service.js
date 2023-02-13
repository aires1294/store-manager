const productsModel = require('../models/products.models');

const getAllProducts = async () => {
  const allProducts = await productsModel.getAllProducts();
  // console.log('estou aqui', allProducts);
  return allProducts;
};

const getProductById = async (id) => {
  const productId = await productsModel.getProductById(id);
  if (!productId) {
    return { type: 404, message: 'Product not found' };
  }
  return { type: 200, message: productId };
};

module.exports = { getAllProducts, getProductById };