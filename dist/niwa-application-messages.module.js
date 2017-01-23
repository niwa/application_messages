"use strict";
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var common_1 = require('@angular/common');
var niwa_application_messages_component_1 = require('./niwa-application-messages.component');
var NiwaApplicationMessagesModule = (function () {
    function NiwaApplicationMessagesModule() {
    }
    NiwaApplicationMessagesModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    declarations: [niwa_application_messages_component_1.NiwaApplicationMessagesComponent],
                    exports: [niwa_application_messages_component_1.NiwaApplicationMessagesComponent],
                    entryComponents: [],
                    providers: []
                },] },
    ];
    /** @nocollapse */
    NiwaApplicationMessagesModule.ctorParameters = [];
    return NiwaApplicationMessagesModule;
}());
exports.NiwaApplicationMessagesModule = NiwaApplicationMessagesModule;
//# sourceMappingURL=niwa-application-messages.module.js.map