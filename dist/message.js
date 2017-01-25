"use strict";
var Message = (function () {
    function Message(status, text) {
        this.text = text;
        this.status = status;
        switch (this.status) {
            case 'ok':
                this.cssClass = 'ok';
                break;
            case 'message':
                this.cssClass = 'info';
                break;
            case 'maintenance':
                this.cssClass = 'warning';
                break;
            case 'error':
                this.cssClass = 'danger';
                break;
            default:
                this.cssClass = this.status;
                break;
        }
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.js.map