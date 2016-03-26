// api.js

var express = require('express');
var router = express.Router();

router.get('/whoami', whoami);

function whoami(req, res) {
    res.json({'user-agent': req.headers['user-agent']});
}

module.exports = router;