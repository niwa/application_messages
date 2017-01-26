"use strict";
var Message = (function () {
    function Message(status, text) {
        this.text = text;
        this.status = status;
        switch (this.status) {
            case 'ok':
                this.cssClass = 'ok';
                this.icon = '-ok-sign';
                break;
            case 'message':
                this.cssClass = 'info';
                this.icon = '-info-sign';
                break;
            case 'maintenance':
                this.cssClass = 'warning';
                this.icon = '-wrench';
                break;
            case 'error':
                this.cssClass = 'danger';
                this.icon = '-warning-sign';
                break;
            default:
                this.cssClass = this.status;
                this.icon = '';
                break;
        }
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.js.map