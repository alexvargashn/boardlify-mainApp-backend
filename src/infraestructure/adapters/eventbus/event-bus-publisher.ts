import { Injectable } from "@nestjs/common";
import { EventBus } from "@nestjs/cqrs";
import { EventBusPublisher } from "src/modules/user/domain/ports/inbound/event-bus-publisher";
import { EventBase } from "src/modules/user/shared/domain-event";

@Injectable()
export class EventBusPublisherService implements EventBusPublisher {
    
    constructor(private eventbus: EventBus){}

    async publish(event: EventBase): Promise<void> {
    
        await this.eventbus.publish(event)
        
    }

}