ToDoController = require('./../controllers/ToDoController.js')
module.exports = function(app){
  app.get('/', ToDoController.index)
}
