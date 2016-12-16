// /*
//     Customer Controller File
//     Listens to requests,
//     Asks models to perform c.r.u.d. operations from DB
//     Responds to client
// */
var mongoose = require("mongoose");
var Customer = mongoose.model("Customer"); //Getting

module.exports = {
    showcustomers: function (req, res)
      {
        Customer.find({}, function (err, customers)
        {
          res.json({customers: customers});
        });
      },
    addcustomer: function (req, res){
      var customer = new Customer ({
        name: req.body.name
      });
      //saving customer to mongodb
      customer.save(function(err){
        if (err) {
          console.log(err);
        }
        else {
          console.log("Successfully saved:", customer);
        }
        res.json({customer: customer});
      });
    },
    delete: function (req, res){
      var id = req.body._id;
      //saving customer to mongodb
      Customer.remove({_id: id}, function(err){
      });
    }
};
