import { CreateUserDto } from "src/core/shared/dto/create-user.dto";


export class CreateUserCommand {
    constructor(public readonly user: CreateUserDto) {}
}