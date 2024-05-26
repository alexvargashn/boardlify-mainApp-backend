import { Injectable } from "@nestjs/common";
import { UserService } from "src/core/domain/services/user.service";

@Injectable()
export class UserUseCases {

    constructor(
        private user: UserService
    ) {}

    getUsers() {
        return  this.user.getUsers();
    }

}