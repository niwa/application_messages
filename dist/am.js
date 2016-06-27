'use strict';
define([
    'angular',
    'am.service',
    'am.directive',

], function (angular) {
    return angular.module('application.messages', [
        'am.service',
        'am.directive'
    ]);
});