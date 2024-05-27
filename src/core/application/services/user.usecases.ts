import { Injectable } from "@nestjs/common";
import { UserService } from "src/core/domain/services/user.service";
import { CreateUserDto } from "src/core/shared/dto/create-user.dto";

@Injectable()
export class UserUseCases {

    constructor(
        private user: UserService
    ) {}

    create(createUserDto: CreateUserDto) {
        
    }

    getUsers() {
        return  this.user.getUsers();
    }

}