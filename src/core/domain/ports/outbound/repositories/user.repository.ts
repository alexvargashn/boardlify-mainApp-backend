import { User } from "src/core/domain/model/entities/user";

export interface UserRepository {

    findAll(): Promise<User[]>;

    save(user: User): Promise<User>;
}