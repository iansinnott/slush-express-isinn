/**
 * Global App configuration.
 */

module.exports = {

  // Siply mirrors the version specified in package.json
  version: require('../package.json').version,

  // Static asset paths. These are the endpoints for the app's assets
  paths: {
    js: 'client/**/*.js',                // All JS files
    jsMain: 'client/index.js',           // App entry point
    styl: ['client/**/*.styl', 'stylesheets/**/*.styl'], // All stylus files
    stylMain: 'client/lib/*.styl',       // Main stylus files
    dest: 'public/'                      // Output dest for js & css
  }

};
