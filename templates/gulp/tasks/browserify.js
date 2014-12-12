var gulp       = require('gulp'),
    browserify = require('browserify'),
    source     = require('vinyl-source-stream');

module.exports = function() {
  browserify(process.cwd() + '/client/')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/'));
};
