import { Subject } from 'rxjs';

export class EventObject {
    event: string;
    key: string;
    subject: Subject<any>;
}
