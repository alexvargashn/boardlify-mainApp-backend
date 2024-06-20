import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/core/domain/model/entities/user";
import { UserRepository } from "src/core/domain/ports/outbound/repositories/user.repository";
import { Repository } from "typeorm";
import { UserEntity } from "../entities/user";

@Injectable()
export class PostgresUserRepository implements UserRepository {

    constructor(
        @InjectRepository(UserEntity) private repository: Repository<UserEntity>
    ) {}

    count(): Promise<number> {
        return this.repository.count();
    }

    findBySlice(limit: number, offset: number): Promise<User[]> {
        return this.repository
            .createQueryBuilder('user')
            .take(limit)
            .skip(offset)
            .getMany();
    }

    async findAll(): Promise<User[]> {
        return this.repository.find();
    }

    async save(user: User): Promise<User> {
        return this.repository.save(user);
    }


}