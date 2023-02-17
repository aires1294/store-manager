const { connection } = require('./connection');

const insertSale = async (newSale) => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
  const [{ insertId }] = await connection.execute(query);
  const saleProduct = `INSERT INTO StoreManager.sales_products
    (sale_id, product_id, quantity) VALUES (?, ?, ?)`;
  // console.log('curioso pra ver', saleProduct);

  const sales = await Promise.all(newSale.map(async (element) => {
    await connection.execute(saleProduct, [insertId, element.productId, element.quantity]);
    return element;
  }));
  const saleDone = {
    id: insertId,
    itemsSold: sales,
  };
  return saleDone;
};

const findProductIdSales = async (id) => {
  const prodId = id.map((item) => item.productId);
  const idMap = prodId.map((_) => '?').join(', ');
  const query = `SELECT * FROM StoreManager.products WHERE id IN (${idMap})`;
  const [result] = await connection.execute(query, prodId);
  // console.log('aaaaaaaaaaaaaaa', result);
  return result;
};

const getAllSales = async () => {
  const query = `SELECT sale_id AS saleId, s.date AS date, product_id AS productId, quantity 
  FROM StoreManager.sales_products AS sp INNER JOIN StoreManager.sales AS s
  ON sp.sale_id = s.id ORDER BY sale_id,product_id`;
  const [getSales] = await connection.execute(query);
  return getSales;
};

module.exports = {
  insertSale,
  findProductIdSales,
  getAllSales,
};