const productsService = require('../services/products.service');

const getAllProducts = async (_req, res) => {
  const products = await productsService.getAllProducts();
  // console.log('agora aqui', products);
  return res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const productId = await productsService.getProductById(id);
  if (productId.type === 404) {
    return res.status(productId.type).json({ message: productId.message });
  }
  return res.status(productId.type).json(productId.message);
};

module.exports = { getAllProducts, getProductById };