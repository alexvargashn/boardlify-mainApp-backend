import { User } from "../../../model/entities/user";


export interface UserRepository {

    findAll(): Promise<User[]>;

    findBySlice(limit: number, offset: number): Promise<User[]>;

    save(user: User): Promise<User>;

    count(): Promise<number>;
    
}