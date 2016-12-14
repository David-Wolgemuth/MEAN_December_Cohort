// here we load the Shark model that we created on the server.js page
var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');
var blogs = require('../controllers/blogs.js');
// first route is from the factory, second is from server controller
module.exports = function(app) {
  app.get('/blogs', blogs.index);
  app.post('/blogs', blogs.create);
  app.post('/vote', blogs.vote);
}
