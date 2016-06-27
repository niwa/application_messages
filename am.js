'use strict';
define([
    'angular',
    'application_messages/am.service',
    'application_messages/am.directive',

], function (angular) {
    return angular.module('application.messages', [
        'am.service',
        'am.directive'
    ]);
});