const chai = require('chai');
const sinon = require('sinon');

const productsService = require('../../../src/services/products.service');
const productsModels = require('../../../src/models/products.model')
const products = require('../services/mock.service');
const productById = require('../services/mock.service');


const { expect } = chai;


describe('Service de products', function() {
  describe('Lista todos os produtos', function () {
    it('Deve retornar todos os produtos', async function () {
      sinon.stub(productsModels, 'getAllProducts').resolves(products);
      const result = await productsService.getAllProducts();
      // expect(result.type).to.be.equal(null);
      expect(result).to.be.deep.equal(products);
    })
  })
      afterEach(() => {
      sinon.restore();
      });
  
  // it('Deve retornar o produto de acordo com o ID', async function () {
  //   sinon.stub(productsModels, 'getProductById').resolves(productById);
  //   const result = await productsService.getProductById(1);
  //   expect(result).to.be.deep.equal(productById.message);
  // });
})