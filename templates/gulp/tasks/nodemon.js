'use strict';

var nodemon = require('gulp-nodemon');

module.exports = function() {
  nodemon({
    script: 'bin/www',
    ext: 'js',
    ignore: 'client/'
  });
};
