import { CreateUserDto } from "src/modules/user/shared/dto/create-user.dto";



export class CreateUserCommand {
    constructor(public readonly user: CreateUserDto) {}
}