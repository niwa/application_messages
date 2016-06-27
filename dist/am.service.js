define([
    'angular'

], function (angular) {

    angular.module('am.service', [])
        .service('amService', ['$q', '$http', function ($q, $http) {

            return {
                get: function () {
                    var deferred = $q.defer();
                    $http.get('/status/message').then(function (response) {

                        if (window.DOMParser) {
                            parser = new DOMParser();
                            xmlDoc = parser.parseFromString(response.data, "text/xml");
                        }
                        else // Internet Explorer
                        {
                            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                            xmlDoc.async = false;
                            xmlDoc.loadXML(response.data);
                        }
                        appMessageContainer = xmlDoc.getElementsByTagName("app_message");
                        var status = '';
                        var appstatus = appMessageContainer[0].getAttribute('status');
                        switch (appstatus) {

                            case 'ok':
                                status = 'ok';
                                break;
                            case 'message':
                                status = 'info';
                                break;
                            case 'maintenance':
                                status = 'warning';
                                break;
                            case 'application_error':
                                status = 'danger';
                                break;
                            default:
                                status = appstatus;
                                break;
                        }
                        var appMessage = '';
                        if (status != "ok") {
                            appMessage = appMessageContainer[0].getElementsByTagName("status_text")[0].childNodes[0].nodeValue;
                        }
                        deferred.resolve(
                            {
                                msg: appMessage,
                                status: status
                            }
                        );
                    });
                    return deferred.promise;
                }
            }
        }])
})