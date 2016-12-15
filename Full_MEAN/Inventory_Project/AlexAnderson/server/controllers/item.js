// /*
//     Items Controller File
//     Listens to requests,
//     Asks models to perform c.r.u.d. operations from DB
//     Responds to client
// */
var mongoose = require("mongoose");
var Item = mongoose.model("Item"); //Getting

module.exports = {
    createitem: function (req, res)
      {
        // console.log(req.body);
        var item = new Item({
          itemName: req.body.title,
          description: req.body.description,
          price: req.body.price,
          user: req.body.user
        });
        console.log(item);
        item.save(function (err) {
          if (err) {
            console.log(err);
          }
          else {
            console.log("Successfully Saved:", item);
          }
          res.json({ item: item});
        });
      },
    showitems: function (req, res)
      {
        console.log("you have entered the server-side showitems function");
        Item.find({}, function (err, items)
        {
          if(err)
          {
            console.log(err);
          }
          console.log("This is your output");
          console.log("*************");
          console.log(items);
          console.log("*************");

          res.json({items: items});
        });
      }
};
