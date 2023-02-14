const productsModel = require('../models/products.model');

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

// const insertProduct = async (name) => {
//   await Promise.all(name.map(async (product) => productsModel.insertProduct(product)));
//   return getAllProducts();
// };

const insertProduct = async (name) => {
  console.log(name);
  const product = await productsModel.insertProduct(name);
  // if (!product.name) {
  //   return { type: 400, message: '"name" is required' };
  // } if (product.name.length < 5) {
  //     return { type: 422, message: '"name" length must be at least 5 characters long' };
  // }
  return { id: product, ...name };
};

module.exports = { getAllProducts, getProductById, insertProduct };