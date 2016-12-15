console.log('in routes')

var products = require('../controllers/products.js');
var mongoose = require('mongoose');

module.exports = function(app) {

  app.post('/create', products.createItem)
  app.get('/products', products.index)
  app.post('/addUser', products.createItem)
}
