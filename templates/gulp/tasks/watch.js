'use strict';

var gulp  = require('gulp'),
    debug = require('debug')('gulp:watch'),
    lr    = require('gulp-livereload');

var config = require('../../config');

module.exports = function() {
  debug('Start LR server and watch files');

  lr.listen();

  gulp.watch(config.paths.js, ['browserify'], lr.changed);
  gulp.watch(config.paths.styl, ['stylus']);
  gulp.watch(config.paths.dest + '**/*.css', lr.changed);
};
