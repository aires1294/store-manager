const vSaleQuantity = (req, res, next) => {
  const newSaleQuantity = req.body;
  
  const countQuantity = (body) => body.every((i) => i.quantity < 0 || i.quantity === 0);
  
  const error = (body) => body.every((i) => i.quantity);

  if (countQuantity(newSaleQuantity)) { 
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  if (!error(newSaleQuantity)) return res.status(400).json({ message: '"quantity" is required' });

  next();
};

module.exports = vSaleQuantity;