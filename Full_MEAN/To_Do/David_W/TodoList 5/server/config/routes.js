
var todoItems = require("../controllers/todo-items.js");

module.exports = function (app)
{
    app.get("/items", todoItems.index);
    app.post("/items", todoItems.create);
};
