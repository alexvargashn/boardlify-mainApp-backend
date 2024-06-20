import { EventBase } from "src/modules/user/shared/domain-event";



export interface EventBusPublisher {
    publish(event: EventBase): void
}