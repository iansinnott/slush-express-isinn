var express = require('express');
var router  = require('./routes');
var config  = require('./config');

// Instantiate the app
var app = express();

// This is necessary to avoid having to type the extension like 'index.jade'
app.set('view engine', 'jade');

app.set('port', process.env.PORT || 3000);

// Use public/ as the web root
app.use(express.static(__dirname + '/public'));

// View Helpers
app.use(function(req, res, next) {
  res.locals.version = config.version;
  next();
});

// Set routes
app.use('/', router);

module.exports = app;
