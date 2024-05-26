import { Controller, Get } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserUseCases } from "src/core/application/services/user.usecases";
import { AppResponse } from "../model/app.response";

@Controller('/user')
@ApiTags('User')
export class UserController {

    constructor(
        private user: UserUseCases
    ) { }

    @Get('')
    @ApiResponse({ status: 201, description: 'User was created', type: String })
    async getUsers(): Promise<AppResponse> {
        const users = await this.user.getUsers();
        console.log(users);
        return {
            status: 200,
            message: 'All ok',
            data: users
        };
    }

}