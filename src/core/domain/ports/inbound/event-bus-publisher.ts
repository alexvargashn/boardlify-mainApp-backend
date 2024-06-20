import { EventBase } from "src/core/shared/domain-event";


export interface EventBusPublisher {
    publish(event: EventBase): void
}