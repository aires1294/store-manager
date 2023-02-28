const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');

const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');
const products = require('./mock.controller');
// const product = require('./mock.controller')

chai.use(sinonChai);
const { expect } = chai;

describe('Controller de products', function () {
  describe('Lista todos os produtos', function () {
    it('Deve retornar uma resposta com status 200 e todos os produtos', async function () {
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'getAllProducts').resolves(products);
      await productsController.getAllProducts(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithExactly(products);
    })
    it('Deve retornar uma resposta com status 200 e o produto pelo ID', async function () {
      const req = { params: { id: 1 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'getProductById').resolves({ type:200, message: products[0] });
      await productsController.getProductById(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithExactly(products[0]);
      
    })
  })
})