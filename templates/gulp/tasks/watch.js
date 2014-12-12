var gulp   = require('gulp'),
    reload = require('gulp-livereload');

var config = require('../../config');

module.exports = function() {

  reload.listen();

  // Re-compile stylus when changed. Note: We also listen directly to the
  // compiled CSS file to trigger a changed event on the LR server. This way it
  // injects the CSS directly instead of refreshing the page.
  gulp.watch('stylesheets/**/*.styl', ['styl']);
  gulp.watch(config.path.css, reload.changed);

  gulp.watch('views/**/*.jade', reload.changed);
  gulp.watch('client/**/*.js', ['browserify']);
  gulp.watch(config.path.js, reload.changed);
};
