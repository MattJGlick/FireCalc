/**
 * Created by MattGlick on 4/1/2015.
 */
var express = require('express');
var calculateService = require('../services/calculate-service');

module.exports = calculateRouter;

function calculateRouter() {
    var router = express.Router();

    router.get('/', function(req, res) {
        res.render('index', {
            title: 'Welcome'
        });
    });

    router.post('/', calculateService.calculate);

    return router;
}