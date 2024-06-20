import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UserUseCases } from "../../services/user.usecases";
import { CreateUserCommand } from "../impl/create-user.command";

@CommandHandler(CreateUserCommand)
export class CreateUserHanlder implements ICommandHandler<CreateUserCommand> {
    constructor(private user: UserUseCases) {}

    async execute(command: CreateUserCommand) {
        this.user.create(command.user);
    }
}