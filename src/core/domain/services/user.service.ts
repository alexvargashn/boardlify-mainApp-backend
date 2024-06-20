import { CreateUserDto } from "src/core/shared/dto/create-user.dto";
import { UserCreated } from "../events/user-created";
import { User } from "../model/entities/user";
import { EventBusPublisher } from "../ports/inbound/event-bus-publisher";
import { UserRepository } from "../ports/outbound/repositories/user.repository";


export class UserService {

    constructor(
        private user: UserRepository,
        private readonly eventBus: EventBusPublisher
    ) {}

    async create(user: CreateUserDto): Promise<User> {
        return  await this.user
            .save(user)
            .then(userSaved => { 
                this.eventBus.publish(new UserCreated(userSaved));
                return userSaved;
            });
    }

    getUsers() {
        return this.user.findAll();;
    }

    async getUsersSlice(limit: number, offset: number) {
        return this.user.fin
    }
}