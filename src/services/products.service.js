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
  console.log('testandooo', productId);
  return { type: 200, message: productId };
};

const insertProduct = async (newProduct) => {
  const productId = await productsModel.insertProduct(newProduct);
  console.log(productId);
  if (!newProduct.name) {
    return { type: 400, message: '"name" is required' };
  } if (newProduct.name.length < 5) {
      return { type: 422, message: '"name" length must be at least 5 characters long' };
  }
  return { id: productId, ...newProduct };
};

const deleteProduct = async (id) => {
  const product = await productsModel.deleteProduct(id);
  console.log('fodeuuuu', product);
  if (product.affectedRows === 1) {
    return { type: 204, message: '' };
  }
  return { type: 404, message: 'Product not found' };
};

module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
  deleteProduct,
};