var mongoose = require('mongoose'),
    User = mongoose.model('User');

function UserController() {
    this.index = function(req, res) {
        User.find({}, function(err, users) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(users);
            }
        });
    }
    this.show = function(req, res) {
        User.findOne({_id: req.params.id}, function(err, user) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(user);
            }
        });
    }
    this.create = function(req, res) {
        var userInstance = new User(req.body);
        userInstance.created = new Date();
        userInstance.save(function(err){
            if(err){
                console.log(err);
            }
            else {
                console.log("Succesfully saved item");
                res.json({Operation: 'Success'})
            }
        });
    }
    this.update = function(req, res) {
        User.update({_id: req.params.id}, req.body, function(err){
            if(err){
                console.log(err);
            }
            else {
                console.log("Succesfully updated item");
                res.json({Operation: 'Success'})
            }
        });
    }
    this.delete = function(req, res) {
        User.remove({_id: req.params.id}, function(err){
            if(err){
                console.log(err);
            }
            else {
                console.log("Succesfully deleted item");
                res.json({Operation: 'Success'})
            }
        })
    }
}

module.exports = new UserController();
