import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserCommand } from "src/core/application/commands/impl/create-user.command";
import { UserUseCases } from "src/core/application/services/user.usecases";
import { AppResponse } from "../model/app.response";
import { CreateUserRequest } from "../model/request/create-user.request";

@Controller('/user')
@ApiTags('User')
export class UserController {

    constructor(
        private command: CommandBus,
        private query: QueryBus,
        private user: UserUseCases
    ) { }

    //TODO: Try to implement a CQRS form to this method
    @Post()
    async create(
        @Body() createUser: CreateUserRequest
    ): Promise<AppResponse> {
        const userCreated = await this.command.execute( new CreateUserCommand(createUser));
        return {
            status: 200,
            message: 'All ok',
            data: userCreated
        }
    }

    @Get()
    @ApiResponse({ status: 201, description: 'User was created', type: String })
    async getUsers(): Promise<AppResponse> {
        return {
            status: 200,
            message: 'All ok',
            data: await this.user.getUsers()
        };
    }

}