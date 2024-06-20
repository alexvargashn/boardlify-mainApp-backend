import { DomainEvent } from "src/core/shared/domain-event";
import { User } from "../model/entities/user";


export class UserCreated extends DomainEvent<User> {
    static EVENT_NAME = 'boardlify-main-app-backend.user-created';

    constructor(user: User) {
        super(user);
    }

    getName(): string {
        return UserCreated.EVENT_NAME;
    }
    
}