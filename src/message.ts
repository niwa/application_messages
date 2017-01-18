export class Message {
    status: string;
    text: string;

    constructor(status: string, text: string) {
        this.text = text;
        this.status = status;
    }
}
