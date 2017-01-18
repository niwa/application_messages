import { Component, Input } from '@angular/core';
import { Message } from './message';

@Component({
    selector: 'niwa-application-messages',
    template: `<div *ngIf="message">
            {{message}}
</div>`
})
export class ApplicationMessagesComponent {
    message = new Message ('maintenance',"This system will be undergoing maintenance soon");
}
