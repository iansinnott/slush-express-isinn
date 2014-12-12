var gulp = require('gulp');
var fs   = require('fs');

/**
 * A function to remove the extension from a string. 'ext' should be a
 * full extension with the leading '.'. Note: This returns a function that will
 * remove the desired extension, it does not actually remove the extension
 * itself.
 *
 * Note to self: We could accomplish this with String#slice or Path#basename but
 * or some reason I feel that this is a more robust solution.
 *
 * @param {string} ext
 * @returns {function}
 */
function removeExt(ext) {
  var re = new RegExp(ext + '$', 'g');
  return function(string) {
    return string.replace(re, '');
  };
}

/**
 * Gather all tasks that have been defined under .tasks and place them in an
 * array.
 * Note: __dirname is necessary here. './tasks' gets interpretted as /tasks
 * where '/' is project root, not system root.
 */
var tasks = fs.readdirSync(__dirname + '/tasks').map(removeExt('.js'));

/**
 * Augment gulp with all defined tasks and return it. (IIFE)
 */
module.exports = (function() {
  tasks.forEach(function(name) {
    gulp.task(name, require('./tasks/' + name));
  });
  return gulp;
})();
