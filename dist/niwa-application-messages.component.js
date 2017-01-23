"use strict";
var core_1 = require('@angular/core');
var message_1 = require('./message');
var NiwaApplicationMessagesComponent = (function () {
    function NiwaApplicationMessagesComponent() {
        this.message = new message_1.Message('maintenance', "This system will be undergoing maintenance soon");
    }
    NiwaApplicationMessagesComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'niwa-application-messages',
                    template: "<div *ngIf=\"message\" class=\"{{message.status}}\">\n            {{message.text}}\n</div>"
                },] },
    ];
    /** @nocollapse */
    NiwaApplicationMessagesComponent.ctorParameters = [];
    return NiwaApplicationMessagesComponent;
}());
exports.NiwaApplicationMessagesComponent = NiwaApplicationMessagesComponent;
//# sourceMappingURL=niwa-application-messages.component.js.map