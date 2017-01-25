export class Message {
    status: string;
    text: string;
    cssClass: string;

    constructor(status: string, text: string) {
        this.text = text;
        this.status = status;

        switch(this.status) {

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
}
