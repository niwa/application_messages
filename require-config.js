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
		angularMocks: 'bower_components/angular-mocks/angular-mocks',
		angular_jwt: 'bower_components/angular-jwt/dist/angular-jwt',
		text: 'bower_components/requirejs-text/text',
	},

	shim: {
		'angular' : {'exports' : 'angular'},
		'angularLoader':['angular'],
		'angularSanitize':['angular'],
        'angular_jwt': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		},
		'momenttz':['moment'],
	},
	priority: [
		"angular"
	],

	deps: window.__karma__ ? allTestFiles : [],
	callback: window.__karma__ ? window.__karma__.start : null,
	baseUrl: window.__karma__ ? '/base/app' : '',
});

require([
	'app',
	], function(angular, app) {
		var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, ['forecaster']);
		});
	}
);
