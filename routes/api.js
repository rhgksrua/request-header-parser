// api.js

var express = require('express');
var parseHeaders = require('../services/parseHeader');

var router = express.Router();

router.get('/', index);

router.get('/whoami', whoami);

function index(req, res) {
    var url = req.protocol + "://" + req.get('host');
    res.render('api', {host: url});
}

function whoami(req, res) {
    var software = parseHeaders.getSoftware(req.headers['user-agent']);
    var language = parseHeaders.getLanguage(req.headers['accept-language']);
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    var results = {
        ipaddress: ip,
        language: language,
        software: software
    };
    
    res.json(results);
}

module.exports = router;