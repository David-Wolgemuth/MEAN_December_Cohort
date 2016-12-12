var express = require('express'),
bp = require('body-parser'),
path = require('path'),
db = require('./server/config/mongoose.js'),
route_setter = require('./server/config/routes.js'),
root = __dirname,
port = process.env.PORT || 8000,
app = express();

app.use(express.static(path.join(root, 'client')));
app.use(express.static(path.join(root, 'node_modules')));
app.use(express.static(path.join(root, 'server')));
app.use( bp.json());

route_setter(app);

app.listen(port, function(){
  console.log(`Listening on ${ port }`)
})
