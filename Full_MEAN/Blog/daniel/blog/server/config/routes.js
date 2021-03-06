var allItems = require('../controllers/blogs.js');

/*
    Routes File

    Tells app to listen for url-routes,
    passes work off to Controllers
*/

module.exports = function (app)
{
    app.get("/items", allItems.index);
    app.post("/items", allItems.create);
    app.get("/showblog/:id", allItems.showBlog);
};
