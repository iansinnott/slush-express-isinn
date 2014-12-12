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
  var hasGit = !exec('which git', { silent: true }).code;

  if (!hasGit)
    return exec('whoami').output.trim();

  var name   = exec('git config --get user.name', { silent: true }).output.trim(),
      email  = exec('git config --get user.email', { silent: true }).output.trim(),
      url    = exec('git config --get user.url', { silent: true }).output.trim(),
      author = [];

  if (name) author.push(name);
  if (email) author.push('<' + email + '>');
  if (url) author.push('(' + url + ')');

  return author.join(' ');
}

var questions = [
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
    'default': 'index.js'
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
  }
];

/**
 * This is a bit messy. I could probably clean this up a bit by simply using
 * through and running _.template directly if the file being passed through the
 * stream was package .json.
 */
gulp.task('default', function (done) {
  inquirer.prompt(questions,
    function (answers) {

      // Copy all files over OTHER than package.json
      gulp.src([
          __dirname+'/templates/**', // Everything under templates/ ...
          '!'+__dirname+'/templates/package.json' // ... except package.json
        ],{ dot: true })
        .pipe(conflict('./'))
        .pipe(gulp.dest('./')); // Relative to cwd

      // Run package.json through the template function, then copy it over and
      // run the install script
      gulp.src(__dirname + '/templates/package.json')
        .pipe(template(answers))
        .pipe(conflict('./'))
        .pipe(gulp.dest('./'))
        .pipe(install())
        .on('finish', function () {
          done(); // Finished!
        });
    });
});
