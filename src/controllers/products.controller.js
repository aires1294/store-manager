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

const insertProduct = async (req, res) => {
  const newProduct = req.body;
  const product = await productsService.insertProduct(newProduct);
  // console.log('oiii', product);
  if (product.type === 400) {
    return res.status(product.type).json({ message: product.message });
  } if (product.type === 422) {
    return res.status(product.type).json({ message: product.message });
  }
  return res.status(201).json(product);
};

module.exports = { getAllProducts, getProductById, insertProduct };