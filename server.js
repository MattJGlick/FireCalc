/**
 * Created by MattGlick on 3/31/2015.
 */
var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

// handle the body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// handle the directing of the bootstrap files
app.use(express.static(__dirname + '/bower_components'));

// get request to the index
app.get('/', function(req, res) {
    res.render('index', {
        title: 'Welcome'
    });
});

// posting to the index
app.post('/', function (req, res) {
    console.log(JSON.stringify(req.body, null, 2));

    res.render('index', {
        title: 'Welcome'
    });
});

app.listen(3000);