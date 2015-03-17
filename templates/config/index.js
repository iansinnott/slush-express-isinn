'use strict';

/**
 * Global App configuration.
 */

var crypto  = require('crypto'),
    version = require('../package.json').version;

/**
 * Create a SHA from a given string.
 */
function createSha(str) {
  var shasum = crypto.createHash('sha1');
  shasum.update(str);
  return shasum.digest('hex');
}

module.exports = {

  // Siply mirrors the version specified in package.json
  version: version,

  versionSha: createSha(version),

  // Static asset paths. These are the endpoints for the app's assets
  paths: {
    js: 'client/**/*.js',                // All JS files
    jsMain: 'client/index.js',           // App entry point
    styl: ['client/**/*.styl', 'stylesheets/**/*.styl'], // All stylus files
    stylMain: 'stylesheets/index.styl',       // Main stylus files
    dest: 'public/'                      // Output dest for js & css
  },

  createSha: createSha

};
