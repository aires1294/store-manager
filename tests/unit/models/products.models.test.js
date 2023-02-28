const chai = require('chai');
const sinon = require('sinon');

const productsModels = require('../../../src/models/products.model');
const products = require('../models/mock.models');
// const product = require('../models/mock.models')
// const deletedProducts = require('../models/mock.models');
const deleteResult = require('../models/mock.models');


const { connection } = require('../../../src/models/connection');
const { expect } = chai;

describe('Model de orders', function () {
 
  describe('Testando função getAllProducts', function () {
   
    it('Deveria retornar todos os produtos', async function () {
      sinon.stub(connection, 'execute').resolves([products]);

      const result = await productsModels.getAllProducts();

      expect(result).to.be.deep.equal(products);
    })
    
  
  });
  describe('Testando função getProductById', function () {
   
    it('Deveria retornar o produto especificado pelo Id', async function () {
      sinon.stub(connection, 'execute').resolves([[products[1]]]);

      const result = await productsModels.getProductById(1);

      expect(result).to.be.deep.equal(products[1]);
    });
    
  
  });
  
  describe('Testando função deleteProduct', function () {
   
    it('Deveria deletar um produto pelo Id', async function () {
      sinon.stub(connection, 'execute').resolves([deleteResult]);

      const result = await productsModels.deleteProduct(1);
      // console.log('agoraaaa', result);
      expect(result).to.be.deep.equal(deleteResult);
    });
    
  
});
 this.afterEach(() => {
      sinon.restore();
    })
});
