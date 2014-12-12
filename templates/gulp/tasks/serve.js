var gutil = require('gulp-util'),
    app   = require('../../app');

module.exports = function() {
  var server = app.listen(app.get('port'), function() {
    gutil.log('App server listening on port',
              gutil.colors.magenta(server.address().port));
  });
};

