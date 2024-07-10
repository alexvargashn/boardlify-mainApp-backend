import { CreateUserDto } from "src/modules/user/shared/dto/create-user.dto";
import { User } from "../../../model/entities/user.entity";


export interface UserRepository {

    findAll(): Promise<User[]>;

    findBySlice(limit: number, offset: number): Promise<User[]>;

    findByTerm(term: string): Promise<User>;

    save(user: CreateUserDto): Promise<User>;

    count(): Promise<number>;
    
}