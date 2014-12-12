/**
 * Global App configuration.
 */

module.exports = {

  // Siply mirrors the version specified in package.json
  version: require('../package.json').version,

  // Static asset paths. These are the endpoints for the app's assets
  path: {
    css: 'public/app.css',
    js: 'public/app.js',
    images: 'public/images/'
  }

};
