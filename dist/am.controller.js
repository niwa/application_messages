angular.module('am.controller', ['am.service'])

    .controller('amController', [
        'amService',

        function (amService) {
            var vm = this;
            amService.get().then(function (msg) {
                vm.app_message = msg;
            })
        }
    ]);
