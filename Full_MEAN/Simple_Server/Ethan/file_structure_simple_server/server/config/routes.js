console.log('future routes go here')

friends = require('../controllers/friends.js')
module.exports = function(app){
  app.get('/friends', friends.index);
  app.get('/friends/:id', friends.show);
  app.post('/friends', friends.create);
  app.post('/friends/:id', friends.update);
  app.delete('/friends/:id', friends.delete);
}
