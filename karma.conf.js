var path = require('path');

var webpackConfig = require('./webpack.config');

var ENV = process.env.npm_lifecycle_event;
var isTestWatch = ENV === 'test-watch';

module.exports = function (config) {
  var _config = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',

    // list of files / patterns to load in the browser
    files: [
        './src/message.spec.ts'
    ],

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: isTestWatch ? true : false,

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    browsers: ['Chrome'],


    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  };



  config.set(_config);

};
