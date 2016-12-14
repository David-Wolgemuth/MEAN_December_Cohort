var UserController = require('./../controllers/UserController.js');
module.exports = function(app) {
    app.get('/friends', UserController.index);
    app.get('/friends/:id', UserController.show);
    app.post('/friends', UserController.create);
    app.put('/friends/:id', UserController.update);
    app.delete('/friends/:id', UserController.delete);
}
