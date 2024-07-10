import { Injectable } from "@nestjs/common";
import { UserService } from "src/modules/user/domain/services/user.service";
import { User } from "../../domain/model/entities/user.entity";
import { CreateUserDto } from "../../shared/dto/create-user.dto";
import { UserCreatedDto } from "../../shared/dto/user-created.dto";
import { Paginated } from "../utils/Paginated";

export interface GetUsersRequest {
    page: number;
    size: number;
}

export interface GetUserByTerm {
    term: string;
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

    async getUsers(getUsers: GetUsersRequest) {
        const offset = getUsers.page - 1 // define offset for query
        const users = await this.user.getUsersSlice(getUsers.size, offset) // get orders slice
        const totalRecords = await this.user.getUsersCount(); // data count
        
        // creating a paginated
        return Paginated.create({
            ...getUsers,
            count: totalRecords,
            data: users,
        })
    }

    async getUserByTerm(request: GetUserByTerm) {
        return this.user.getUserByTerm(request.term);
    }

}