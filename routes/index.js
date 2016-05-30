var config = require('../config/config.js');

module.exports = require('express').Router()
    .get('/', function (req, res, next) {
        res.render('index.jade');
    })
    .get('/virtual-scripts', require('./virtual-scripts.js'))
    .get('/ping', function (req, res) {
        res.send('pong');
    })
;