import { Message } from './message';
import { NiwaApplicationMessagesService } from './niwa-application-messages.service';
export declare class NiwaApplicationMessagesComponent {
    private appMessagesService;
    message: Message;
    error: any;
    constructor(appMessagesService: NiwaApplicationMessagesService);
    ngOnInit(): void;
    showMessage(): boolean;
}
