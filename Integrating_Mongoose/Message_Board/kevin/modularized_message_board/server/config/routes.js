var posts = require('../controllers/messages.js');
var comments = require('../controllers/comments.js')
module.exports = function(app){
  app.get('/', function(req, res){
    posts.show(req, res)
  })
  app.post('/posts', function(req, res){
    posts.create(req, res)
  })
  app.post('/comments/:id', function(req, res){
    comments.create(req, res);
  })
}
