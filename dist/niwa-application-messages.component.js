"use strict";
var core_1 = require('@angular/core');
var message_1 = require('./message');
var niwa_application_messages_service_1 = require('./niwa-application-messages.service');
var NiwaApplicationMessagesComponent = (function () {
    function NiwaApplicationMessagesComponent(appMessagesService) {
        this.appMessagesService = appMessagesService;
        this.message = new message_1.Message('ok', "");
    }
    NiwaApplicationMessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appMessagesService.getMessage().subscribe(function (message) {
            _this.message = message;
        }, function (error) {
            _this.error = error;
            console.log(_this.error);
        });
    };
    NiwaApplicationMessagesComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'niwa-application-messages',
                    providers: [niwa_application_messages_service_1.NiwaApplicationMessagesService],
                    template: "\n<div *ngIf=\"message\" class=\"{{message.status}}\">\n   \n</div>\n<div class=\"col-md-12\">\n    <div class=\"panel\">\n        <div class=\"panel-heading bg-{{message.cssClass}}\">\n            <span class=\"glyphicon glyphicon-wrench\"> </span>\n            {{message.text}}\n        </div>\n    </div>\n</div>\n\n"
                },] },
    ];
    /** @nocollapse */
    NiwaApplicationMessagesComponent.ctorParameters = [
        { type: niwa_application_messages_service_1.NiwaApplicationMessagesService, },
    ];
    return NiwaApplicationMessagesComponent;
}());
exports.NiwaApplicationMessagesComponent = NiwaApplicationMessagesComponent;
//# sourceMappingURL=niwa-application-messages.component.js.map