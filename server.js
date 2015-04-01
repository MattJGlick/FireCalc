/**
 * Created by MattGlick on 3/31/2015.
 */
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');


var app = module.exports = express();

app.set('views', './views');
app.set('view engine', 'jade');

// handle the body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// handle the directing of the bootstrap files
app.use(express.static(__dirname + '/bower_components'));

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

app.get('*', routes.index);

app.listen(3000);