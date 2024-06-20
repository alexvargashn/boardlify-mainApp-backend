import { Body, Controller, Get, Post, Query, UseFilters } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiInternalServerErrorResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserCommand } from "src/core/application/commands/impl/create-user.command";
import { UserUseCases } from "src/core/application/services/user.usecases";
import { UserCreatedDto } from "src/core/shared/dto/user-created.dto";
import { GlobalExcpetionFilter } from "../exception-filters/gloal-exception.filter";
import { CreateUserRequest } from "../model/request/create-user.request";

@Controller('/user')
@UseFilters(GlobalExcpetionFilter)
@ApiTags('User')
export class UserController {

    constructor(
        private command: CommandBus,
        private query: QueryBus,
        private user: UserUseCases
    ) { }

    @ApiInternalServerErrorResponse({description: 'Error server'})
    @Post()
    @ApiResponse({ status: 201, description: 'User was created', type: String })
    async create(
        @Body() createUser: CreateUserRequest
    ): Promise<UserCreatedDto> {
        return await this.command.execute(new CreateUserCommand(createUser));
    }

    @Get()
    @ApiResponse({ status: 201, description: 'User was created', type: String })
    async getUsers(
        @Query('page') page: number,
        @Query('size') size: number
    ) {
        return this.query.execute()
    }

}