var express = require('express');
var morgan = require('morgan');

var api = require('./routes/api');

var app = express();

var port = process.env.PORT || 8000;

app.use(morgan('combined'));

app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

// routes
app.get('/', function(req, res) {
    res.render('index');
});

app.use('/api', api);




app.listen(port, function() {
    console.log('running on port: ' + port);
})