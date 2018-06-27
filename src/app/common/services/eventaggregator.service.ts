import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { EventObject } from '../model/EventObject';

@Injectable()
export class EventAggregator {

    private eventObjects: EventObject[] = [];

    subscribe(event: string, key: string, func: (param: any) => void) {
        const eos = this.eventObjects.filter((eo) => {
            if (eo.event === event) {
                return eo;
            }
        });
        if (eos == null || eos === undefined || eos.length === 0) {
            const subject = new Subject();
            subject.subscribe(
                {
                    next: (v) => {
                        func(v);
                    }
                }
            );
            const eventObject = new EventObject();
            eventObject.event = event;
            eventObject.key = key;
            eventObject.subject = subject;
            this.eventObjects.push(eventObject);
        } else {
            const filterEos = eos.filter((feo) => {
                if (feo.key === key) {
                    return feo;
                }
            });
            if (filterEos.length === 0) {
                const subject = eos[0].subject;
                subject.subscribe(
                    {
                        next: (v) => {
                            func(v);
                        }
                    }
                );
            }
        }
    }

    publish(event: string, param: any) {
        const eos = this.eventObjects.filter((eo) => {
            if (eo.event === event) {
                return eo;
            }
        });
        if (eos.length !== 0) {
            const subject = eos[0].subject;
            subject.next(param);
        }
    }

    removeAll() {
        this.eventObjects = [];
    }

    remove(event) {
        const eos = this.eventObjects.filter((eo) => {
            if (eo.event !== event) {
                return eo;
            }
        });
        this.eventObjects = eos;
    }
}
