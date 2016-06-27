'use strict';

if(window.__karma__) {

    var allTestFiles = [];
    var TEST_REGEXP = /spec\.js$/;

    var pathToModule = function(path) {

        return path.replace(/^\/base\/app\//, '').replace(/\.js$/, '');
    };

    Object.keys(window.__karma__.files).forEach(function(file) {
        if (TEST_REGEXP.test(file)) {
            // Normalize paths to RequireJS module names.
            allTestFiles.push(pathToModule(file));
        }
    });
}
require.config({
    paths: {
        angular: 'bower_components/angular/angular',
        angularSanitize:'bower_components/angular-sanitize/angular-sanitize',
        angularRoute: 'bower_components/angular-route/angular-route',
        angularMocks: 'bower_components/angular-mocks/angular-mocks',
        text: 'bower_components/requirejs-text/text',
        jquery:'bower_components/jquery/dist/jquery',
        bootstrap:'bower_components/bootstrap/dist/js/bootstrap',
    },

    shim: {
        'angular' : {'exports' : 'angular'},
        'angularLoader':['angular'],
        'angularRoute': ['angular'],
        'angularSanitize':['angular'],
        'angularMocks': {
            deps:['angular'],
            'exports':'angular.mock'
        },
        'bootstrap':['jquery'],
    },
    priority: [
        "angular"
    ],



    deps: window.__karma__ ? allTestFiles : [],
    callback: window.__karma__ ? window.__karma__.start : null,
    baseUrl: window.__karma__ ? '/base/app' : '',
});

require([
        'angular',
        'bootstrap',
        'app',
    ], function(angular, app) {
        var $html = angular.element(document.getElementsByTagName('html')[0]);
        angular.element().ready(function() {
            // bootstrap the app manually
            angular.bootstrap(document, ['forecaster']);
        });
    }
);
