ToDoController = require('./../controllers/ToDoController.js')
module.exports = function(app){
  app.get('/items', ToDoController.index);
  app.post('/items', ToDoController.create);
}
