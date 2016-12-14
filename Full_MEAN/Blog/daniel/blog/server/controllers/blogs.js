/*
    TodoItems Controller File

    Listens to requests,
    Asks models to c.r.u.d. data from DB
    Responds to client
*/

var mongoose = require("mongoose");
var Entry = mongoose.model("entry");  // Getting

module.exports = {

    index: function (req, res){
        Entry.find({}, function (err, items) {
            res.json({ items: items });
        });
    },

    create: function (req, res){
      var item = new Entry({
          title: req.body.title,
          author: req.body.author,
          description: req.body.description,
          vote: 0,
          postDate: new Date(),
      });
      item.save(function (err) {
          if (err) {
              console.log(err);
          } else {
              console.log("Successfully Saved:", item);
          }
          res.json({ item: item });
      });
    },

    showBlog: function (req, res){
      console.log(req.params.id);
      var id = req.params.id;
      console.log ("This is the object id you clicked:", id);
      Entry.findOne({_id: id}, function (err,blog){
        console.log("Specific blog has been located!", item);
        res.json({item: item});
      });
    }//,

    // other CRUD operations go here

};
