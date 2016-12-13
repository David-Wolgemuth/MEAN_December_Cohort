// here we load the Shark model that we created on the server.js page
var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');
var blogs = require('../controllers/blogs.js');

module.exports = function(app) {
  app.get('/', blogs.index);
}
