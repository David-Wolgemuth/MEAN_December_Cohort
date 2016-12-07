var quotes = require('../controllers/quotes.js');

module.exports = function(app) {
  app.get("/", function(req, res) {
    quotes.show(req,res);
  });

  app.get("/", quotes.show);

  // Add User Request
  app.post('/message', function(req, res) {
    quotes.create_message(req,res)
  })

  app.post('/comment', function(req, res) {
    quotes.create_comment(req,res)
  });
}
