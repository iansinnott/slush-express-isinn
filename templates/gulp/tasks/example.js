var gulp  = require('gulp'),
    gutil = require('gulp-util');

/**
 * Example gulp task
 *
 * This file shows how gulp tasks are added using this modular architecture.
 * Since this is just an example it simply logs a message and exits.
 */

module.exports = function() {
  return gutil.log(gutil.colors.green('Example Gulp Task: See gulp/tasks/example.js'));
};
