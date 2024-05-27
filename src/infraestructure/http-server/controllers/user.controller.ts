import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserUseCases } from "src/core/application/services/user.usecases";
import { AppResponse } from "../model/app.response";
import { CreateUserDto } from "../model/dto/create-user.dto";

@Controller('/user')
@ApiTags('User')
export class UserController {

    constructor(
        private user: UserUseCases
    ) { }

    //TODO: Try to implement a CQRS form to this method
    @Post()
    async create(
        @Body() createUser: CreateUserDto
    ): Promise<AppResponse> {
        const userCreated = this.user.create(createUser);
        return {
            status: 200,
            message: 'All ok',
            data: 'Done'
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