console.log('friends controller');
var mongoose = require('mongoose')
var friend = mongoose.model('Friend');

function FriendsController(){
  this.index = function(req,res){
    friend.find({},function(err,results){
      res.json(results);
    })
  };
  this.create = function(req,res){
    console.log(req.body)
    friend.create(req.body,function(err,result){
      if (err){
        console.log(err);
      }
      else{
        res.json(result);
      }
    })
  };
  this.update = function(req,res){
    friend.findOne({_id:req.params.id},function(err,friend){
      if(err){
        console.log(err);
      }
      else{
        friend.name = req.body.name
        friend.language = req.body.language
        friend.save(function(err,updatedFriend){
          if(err){
            console.log(err);
          }else{
            res.json(updatedFriend);
          }
        })
      }
    })
  };
  this.delete = function(req,res){
    friend.remove({_id:req.params.id},function(err,result){
      if(err){
        console.log(err);
      }else{
        res.json({a:"haha"})
      }
    })
  };
  this.show = function(req,res){
    friend.findOne({_id:req.params.id},function(err,result){
      res.json(result);
    })
  };
}
module.exports = new FriendsController(); // what does this export?
