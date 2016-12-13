/*
    Routes File
    Tells app to listen for url-routes,
    passes work off to Controllers
*/
var blogs = require("../controllers/blog.js");

module.exports = function (app)
{
  app.get("/blogs", blogs.index);
  app.post("/blogs", blogs.create);
};
