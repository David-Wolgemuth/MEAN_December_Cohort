/*
    Routes File
    Tells app to listen for url-routes,
    passes work off to Controllers
*/
var product = require("../controllers/product.js");
var customer = require("../controllers/customer.js");


module.exports = function (app)
{
  app.get("/customers", customer.showcustomers);
  // app.post("/item", item.createitem);
  // app.post("/item", item.updateitem);
  // //need to :paramater name to include params
  // app.get("/showItems/", item.showItems);
};
