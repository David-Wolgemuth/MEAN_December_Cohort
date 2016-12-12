var UserController = require('UserController');
module.exports = function(app) {
    app.get('/', UserController.index);
}
