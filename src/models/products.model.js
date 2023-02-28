const { connection } = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM products');
  return result;
};

const getProductById = async (id) => {
  const [[result]] = await connection.execute('SELECT * FROM products WHERE id = (?)',
    [id]);
  return result;
};

const insertProduct = async (newProduct) => {
  const product = 'INSERT INTO products (name) VALUES (?)';
  const [{ insertId }] = await connection.execute(product, [newProduct]);
    // const insertId = await connection.execute(product, [newProduct]);

  console.log('aqui', insertId);
  return insertId;
};

// const updateProduct = async (id) => {
//   const query = 'UPDATE INTO products (name) VALUES(?)';
// };

const deleteProduct = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  // console.log('aquiiiii', result);
  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
  deleteProduct,
};
