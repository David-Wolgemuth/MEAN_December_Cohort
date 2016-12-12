var mongoose = require('mongoose'),
ToDo = mongoose.model('ToDo');

function ToDosController(){

  this.index =  function(req, res){
    ToDo.find({}, function(err, ToDos){
      if(err){
        console.log(err);
      }
      else{
        res.json(ToDos);
      }
    })
  }
  this.create = function(req, res){
    var itemInstance = new ToDo();
    console.log(req.body);
    itemInstance.item = req.body.item;
    itemInstance.save(function(err){
      if(err){
        console.log(err);
      }
      else {
        console.log("Succesfully saved item");
      }
    });
  }
}
module.exports = new ToDosController()
