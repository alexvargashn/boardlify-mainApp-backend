import { DomainEvent } from "../../shared/domain-event";
import { User } from "../model/entities/user";



export class UserCreated extends DomainEvent<User> {
    static readonly EVENT_NAME = 'boardlify-main-app-backend.user-created';

    constructor(user: User) {
        super(user);
    }

    getName(): string {
        return UserCreated.EVENT_NAME;
    }
    
}