'use strict';
define([
        'angular',
        'am.controller'

    ], function (angular) {
        return angular.module('am.directive', ['am.controller'

        ]).directive('applicationMessages', [function () {

            return {

                controller: 'amController',
                controllerAs: 'amctrl',
                replace: true,
                template: '<div ng-if="amctrl.app_message.msg!=\'\'" class="panel ">' +
                '<div ng-cloak class="panel-heading bg-{{amctrl.app_message.status}}">' +
                '<span ng-cloak class="glyphicon glyphicon-wrench"></span>' +
                '{{amctrl.app_message.msg}}' +
                '</div></div>'
            }
        }])
    }
)


