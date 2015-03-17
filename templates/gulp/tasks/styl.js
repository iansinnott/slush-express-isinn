'use strict';

var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    stylus      = require('gulp-stylus'),
    prefix      = require('gulp-autoprefixer'),
    rename      = require('gulp-rename'),
    axis        = require('axis'),
    typographic = require('typographic'),
    rupture     = require('rupture'),
    gulpif      = require('gulp-if'),
    concat      = require('gulp-concat'),
    minify      = require('gulp-minify-css'),
    debug       = require('debug')('gulp:stylus');

var config = require('../../config');

var production = process.env.NODE_ENV === 'production';

module.exports = function() {
  debug('Compiling stylus. File paths: %s, %s', config.paths.stylMain, config.paths.styl);

  // We're using concat b/c we want to make sure our stylus files under
  // client/lib get concatenated first as they have vars.
  gulp.src([config.paths.stylMain, config.paths.styl])
    .pipe(plumber())
    .pipe(concat('temp.styl'))
    .pipe(stylus({ errors: true, use: [axis(), rupture(), typographic()] }))
    .pipe(prefix({ browsers: ['last 2 versions', 'ie >= 8'] }))
    .pipe(rename('app.css'))
    .pipe(gulpif(production, minify()))
    .pipe(gulp.dest('public/'));
};

