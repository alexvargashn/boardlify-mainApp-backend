import { CreateUserDto } from "src/core/shared/dto/create-user.dto";
import { UserRepository } from "../ports/outbound/repositories/user.repository";


export class UserService {

    constructor(
        private user: UserRepository
    ) {}

    create(createUser: CreateUserDto) {
        
    }

    getUsers() {
        return this.user.findAll();;
    }
}