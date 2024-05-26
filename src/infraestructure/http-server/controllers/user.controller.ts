import { Controller, Get, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserUseCases } from "src/core/application/services/user.usecases";
import { AppResponse } from "../model/app.response";

@Controller('/user')
@ApiTags('User')
export class UserController {

    constructor(
        private user: UserUseCases
    ) { }

    @Post()
    async create(): Promise<AppResponse> {
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