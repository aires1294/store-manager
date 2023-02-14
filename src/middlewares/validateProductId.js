const vSaleProductId = (req, res, next) => {
  const newSaleProduct = req.body;

  const requireProductId = (body) => body.every((i) => i.productId);

  if (!requireProductId(newSaleProduct)) {
    return res.status(400).json({ message: '"productId" is required' });
  }    
  next();
};

module.exports = vSaleProductId;