import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
export declare class NiwaApplicationMessagesService {
    private http;
    private baseUrl;
    constructor(http: Http);
    getMessage(): Observable<any>;
    private handleError(error);
    private mapResponse(res);
}
