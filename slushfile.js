var gulp     = require('gulp'),
    install  = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    inquirer = require('inquirer'),
    path     = require('path'),
    exec     = require('shelljs').exec;

/**
 * Get a npm-formatted author string if the user has set their user information
 * in git. If they don't have git it will use the output of `whoami` as the
 * default.
 */
function getAuthor() {
  var hasGit = !exec('which git').code;

  if (!hasGit)
    return exec('whoami').output.trim();

  var name   = exec('git config --get user.name').output.trim(),
      email  = exec('git config --get user.email').output.trim(),
      url    = exec('git config --get user.url').output.trim(),
      author = [];

  if (name) author.push(name);
  if (email) author.push('<' + email + '>');
  if (url) author.push('(' + url + ')');

  return author.join(' ');
}

var questons = [
  {
    type:'input',
    name: 'name',
    message: 'App name:',
    'default': path.basename(process.cwd())
  },{
    type:'input',
    name: 'version',
    message: 'Version number:',
    'default': '0.1.0'
  },{
    type:'input',
    name: 'description',
    message: 'Description:'
  },{
    type:'input',
    name: 'main',
    message: 'Entrypoint:',
    'default': 'input.js'
  },{
    type:'input',
    name: 'author',
    message: 'Author:',
    'default': getAuthor()
  },{
    type:'input',
    name: 'license',
    message: 'License:',
    'default': 'MIT'
  },{
    type: 'confirm',
    name: 'continue',
    message: 'Continue?'
  }
];

gulp.task('default', function (done) {
  inquirer.prompt(questions,
  function (answers) {
    gulp.src(__dirname + '/templates/**') // Relative to __dirname
      .pipe(template(answers))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./')) // Relative to cwd
      .pipe(install())
      .on('finish', function () {
        done(); // Finished!
      });
  });
});
