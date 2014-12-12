var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    stylus  = require('gulp-stylus'),
    prefix  = require('gulp-autoprefixer'),
    rename  = require('gulp-rename'),
    jeet    = require('jeet'),
    rupture = require('rupture'),
    nib     = require('nib');

module.exports = function() {
  gulp.src('stylesheets/index.styl')
    .pipe(plumber())
    .pipe(stylus({ errors: true, use: [jeet(), nib(), rupture()] }))
    .pipe(prefix({ browsers: ['last 2 versions', 'ie >= 8'] }))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public/'));
};

