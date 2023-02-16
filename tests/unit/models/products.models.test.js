const chai = require('chai');
const sinon = require('sinon');

const productsModels = require('../../../src/models/products.model');
const products = require('../models/mock.models');

const { connection } = require('../../../src/models/connection');
const { expect } = chai;

describe('Model de orders', function () {
  describe('Testando função getAllProducts', function () {
   
    it('Deveria retornar todos os produtos', async function () {
      sinon.stub(connection, 'execute').resolves([products]);

      const result = await productsModels.getAllProducts();

      expect(result).to.be.deep.equal(products);
    })
     this.afterEach(() => {
      sinon.restore();
    })
});
});