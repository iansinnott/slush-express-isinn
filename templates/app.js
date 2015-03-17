'use strict';

var express    = require('express');
var morgan     = require('morgan');
var bodyParser = require('body-parser');
var router     = require('./routes');
var config     = require('./config');

var loggingProfile = (process.env.NODE_ENV === 'development') ? 'dev'
                                                              : 'combined';

// Instantiate the app
var app = express();

// This is necessary to avoid having to type the extension like 'index.jade'
app.set('view engine', 'jade');

app.set('port', process.env.PORT || 3000);

// Use public/ as the web root
app.use(express.static(__dirname + '/public'));

// Logging
app.use(morgan(loggingProfile));

// Parse bodies!
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// View Helpers
app.use(function(req, res, next) {
  res.locals.version = config.version;
  res.locals.versionSha = config.versionSha;
  next();
});

// Set routes
app.use('/', router);

app.use(function(req, res, next) {
  var err = new Error('Not Found.');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  var error = (process.env.NODE_ENV === 'development') ? err : {};
  res.status(err.status || 500);
  res.render('404', error);
});

module.exports = app;
