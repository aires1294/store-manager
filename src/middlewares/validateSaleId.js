const validateSaleId = (req, res, next) => {
  const newSaleProduct = req.body;

  const requireProductId = (body) => body.every((i) => i.productId);

  if (!requireProductId(newSaleProduct)) {
    return res.status(404).json({ message: 'Sale not found' });
  }    
  next();
};

module.exports = {
  validateSaleId,
};