/**
 * Created by MattGlick on 3/31/2015.
 */
var express = require('express');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Welcome'
    });
});

app.listen(3000);