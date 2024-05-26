import { UserRepository } from "../ports/outbound/repositories/user.repository";


export class UserService {

    constructor(
        private user: UserRepository
    ) {}

    getUsers() {
        return this.user.findAll();;
    }
}