var gulp       = require('gulp'),
    browserify = require('browserify'),
    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer'),
    gulpif     = require('gulp-if'),
    uglify     = require('gulp-uglify');

var production = process.env.NODE_ENV === 'production';

module.exports = function() {
  browserify(process.cwd() + '/client/')
    .bundle()
    .pipe(source('app.js')) // Not sure why this AND buffer are both necessary
    .pipe(buffer()) // Necessary for piping into gulp plugins
    .pipe(gulpif(production, uglify()))
    .pipe(gulp.dest('public/'));
};
