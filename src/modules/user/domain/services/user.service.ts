import { PersistenceHelper } from "src/infraestructure/shared/util/helpers/persistence.helper";
import { UserEntity } from "../../infraestructure/model/entities/user";
import { CreateUserDto } from "../../shared/dto/create-user.dto";
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
        const userToSave: UserEntity = PersistenceHelper.toEntity(user, UserEntity);
        return  await this.user
            .save(userToSave)
            .then(userSaved => { 
                this.eventBus.publish(new UserCreated(userSaved));
                return userSaved;
            });
    }

    getUsers() {
        return this.user.findAll();;
    }

    getUsersCount() {
        return this.user.count();
    }

    async getUserByTerm(term: string) {
        return this.user.findByTerm(term);
    }

    async getUsersSlice(limit: number, offset: number) {
        return this.user.findBySlice(limit, offset);
    }
}