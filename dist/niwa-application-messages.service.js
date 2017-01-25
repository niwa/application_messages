"use strict";
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var http_1 = require('@angular/http');
var message_1 = require('./message');
var NiwaApplicationMessagesService = (function () {
    function NiwaApplicationMessagesService(http) {
        this.http = http;
        this.baseUrl = '/status/message';
    }
    NiwaApplicationMessagesService.prototype.getMessage = function () {
        return this.http.get(this.baseUrl)
            .map(this.mapResponse)
            .catch(this.handleError);
    };
    NiwaApplicationMessagesService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error || 'Server Error');
    };
    NiwaApplicationMessagesService.prototype.mapResponse = function (res) {
        var xml = res.text();
        var oParser = new DOMParser();
        var xmlDoc = oParser.parseFromString(xml, "text/xml");
        var appMessageContainer = xmlDoc.getElementsByTagName("app_message");
        var appstatus = appMessageContainer[0].getAttribute('status');
        var text = appMessageContainer[0].getElementsByTagName("status_text")[0].childNodes[0].nodeValue;
        var message = new message_1.Message(appstatus, text);
        return message;
    };
    NiwaApplicationMessagesService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    NiwaApplicationMessagesService.ctorParameters = [
        { type: http_1.Http, },
    ];
    return NiwaApplicationMessagesService;
}());
exports.NiwaApplicationMessagesService = NiwaApplicationMessagesService;
//# sourceMappingURL=niwa-application-messages.service.js.map