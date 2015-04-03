/**
 * Created by MattGlick on 3/31/2015.
 */
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');

var server = module.exports = express();

server.set('views', './views');
server.set('view engine', 'jade');

// handle the body
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// handle the directing of the bootstrap files
//server.use(express.static(__dirname + '/bower_components'));
server.use(express.static(__dirname));

server.get('/', routes.index);
server.get('/partials/:name', routes.partials);

server.listen(3000);