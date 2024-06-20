import { Injectable, Logger } from "@nestjs/common";
import { DomainEventBus } from "src/modules/user/shared/DomainEventBus";
import { EventSubscriber } from "src/modules/user/shared/DomainEventSubscriber";
import { EventBase } from "src/modules/user/shared/domain-event";

@Injectable()
export class InMemoryEventBus implements DomainEventBus {

    private subscribers: EventSubscriber[] = []

    subscribe(subscriber: EventSubscriber): void {
        this.subscribers.push(subscriber)
    }

    publish(event: EventBase): void {

        Logger.log(`Publishing Event(name="${event.getName()}")`)
        
        this.subscribers
            .filter(subscriber => subscriber.suscribeTo() === event.getName())
            .forEach(subscriber => {
                try {
                    subscriber.onEvent(event)
                } catch (error) {
                    Logger.warn('Error subscriber', error)
                }
            })
            
    }

}