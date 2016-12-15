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
        console.log("you have entered the server-side showcustomers function");
        Customer.find({}, function (err, customers)
        {
          if(err)
          {
            console.log(err);
          }
          console.log("This is your output");
          console.log("*************");
          console.log(customers);
          console.log("*************");

          res.json({customers: customers});
        });
      }
};