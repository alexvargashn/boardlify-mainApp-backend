import { Injectable } from "@nestjs/common";
import { User } from "src/core/domain/model/entities/user";
import { UserService } from "src/core/domain/services/user.service";
import { CreateUserDto } from "src/core/shared/dto/create-user.dto";
import { UserCreatedDto } from "src/core/shared/dto/user-created.dto";

export interface GetUsersRequest {
    page: number;
    size: number;   
}

export interface GetUsersResponse {
    data: User[];
    totalRecords: number;
    pageSize: number;
    totalPages: number;
    currentPage: number;  
}

@Injectable()
export class UserUseCases {

    constructor(
        private user: UserService
    ) {}

    async create(createUserDto: CreateUserDto): Promise<UserCreatedDto> {
        return this.user.create(createUserDto);
    }

    getUsers(getUsers: GetUsersRequest) {
        const offset = getUsers.page - 1;
        const users = await this.user
    }

}