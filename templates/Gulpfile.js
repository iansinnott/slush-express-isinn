/**
 * The Gulpfile
 *
 * The gulp task structure is based on:
 * http://viget.com/extend/gulp-browserify-starter-faq
 */

var gulp = require('./gulp');

gulp.task('build', ['browserify', 'stylus']);
gulp.task('default', ['build', 'nodemon', 'watch']);
