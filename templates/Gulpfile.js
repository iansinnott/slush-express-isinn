/**
 * The Gulpfile
 *
 * The gulp task structure is based on:
 * http://viget.com/extend/gulp-browserify-starter-faq
 */

var gulp = require('./gulp');

gulp.task('build', ['browserify', 'styl']);
gulp.task('default', ['build', 'serve', 'watch']);
