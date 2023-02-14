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

// const insertProduct = async (name) => {
//   await connection.execute(
//     'INSERT INTO products (name) VALUES (?)',
//   [name],
// );
// };

const insertProduct = async (newProduct) => {
  const product = 'INSERT INTO products (name) VALUES (?)';
  const [{ insertId }] = await connection.execute(product, [newProduct]);
  // console.log('aqui', newProduct);
  return insertId;
};

module.exports = { getAllProducts, getProductById, insertProduct };
