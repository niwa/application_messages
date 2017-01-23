import { Component } from '@angular/core';
import { Message } from './message';

@Component({
    selector: 'niwa-application-messages',
    template: `<div *ngIf="message" class="{{message.status}}">
            {{message.text}}
</div>`
})
export class NiwaApplicationMessagesComponent {
    message = new Message ('maintenance',"This system will be undergoing maintenance soon");
}
