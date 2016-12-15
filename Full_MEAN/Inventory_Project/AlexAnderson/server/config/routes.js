/*
    Routes File
    Tells app to listen for url-routes,
    passes work off to Controllers
*/
var item = require("../controllers/item.js");

module.exports = function (app)
{
  app.post("/item", item.createitem);
  app.get("/items", item.showitems);
  // app.post("/item", item.updateitem);
  // //need to :paramater name to include params
  // app.get("/showItems/", item.showItems);
};
