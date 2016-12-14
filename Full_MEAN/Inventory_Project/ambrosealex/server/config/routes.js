// here we load the Shark model that we created on the server.js page
var mongoose = require('mongoose');
var Item = mongoose.model('Item');
var items = require('../controllers/items.js');

module.exports = function(app) {
    app.get('/items', items.index);
    app.post('/items', items.create);
}
