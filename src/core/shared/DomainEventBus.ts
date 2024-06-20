
import { EventSubscriber } from "./DomainEventSubscriber";
import { EventBase } from "./domain-event";


export interface DomainEventBus {

    subscribe(subscriber: EventSubscriber): void;
    publish(event: EventBase): void;
    
}