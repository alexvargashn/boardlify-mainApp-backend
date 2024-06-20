import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserCreated } from '../../../domain/events/user-created';

@EventsHandler(UserCreated)
export class UserCreatedHandler implements IEventHandler<UserCreated> {
    
    handle(event: UserCreated) {
        const user = event.getData();
        console.log('Event Handler is listening: ', user);
    }
    
}