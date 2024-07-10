import { Body, Controller, Get, Param, Post, Query, UseFilters } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiInternalServerErrorResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GlobalExcpetionFilter } from "src/infraestructure/shared/exception-filters/global-exception.filter";
import { CreateUserCommand } from "src/modules/user/application/commands/impl/create-user.command";
import { UserQueryByTerm, UsersQuery } from "src/modules/user/application/queries/impl/users.query";
import { UserUseCases } from "src/modules/user/application/services/user.usecases";
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

    @Get()
    @ApiResponse({ status: 201, description: 'User was created', type: String })
    async getUsers(
        @Query('page') page: number,
        @Query('size') size: number
    ) {
        console.log("page: " + typeof page, "Size:  " + typeof size)

        return this.query.execute(new UsersQuery(page, size));
    }
    
    @Get('/:term')
    async getUserByTerm(@Param('term') term: string) {
        return await this.query.execute(new UserQueryByTerm(term));
    }

    @ApiInternalServerErrorResponse({description: 'Error server'})
    @Post()
    @ApiResponse({ status: 201, description: 'User was created', type: String })
    async create(
        @Body() createUser: CreateUserRequest
    ) {
        return await this.command.execute(new CreateUserCommand(createUser));
    }



}