import { Component, Input } from '@angular/core';
import { Message } from './message';

@Component({
    selector: 'niwa-application-messages',
    template: `
<div>This is {{appName}}.</div>
<div *ngIf="message" class="{{message.status}}">
   
</div>
<div class="col-md-12">
    <div class="panel">
        <div class="panel-heading bg-{{message.cssClass}}">
            <span class="glyphicon glyphicon-wrench"> </span>
            {{message.text}}
        </div>
    </div>
</div>

`
})
export class NiwaApplicationMessagesComponent {
    @Input() appName = "x";
    message = new Message ('ok',"This system will be undergoing maintenance soon . Y");
    
}
