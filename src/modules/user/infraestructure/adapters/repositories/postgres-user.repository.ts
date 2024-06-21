import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User } from "src/modules/user/domain/model/entities/user";
import { UserRepository } from "src/modules/user/domain/ports/outbound/repositories/user.repository";
import { UserEntity } from "../../model/entities/user";

@Injectable()
export class PostgresUserRepository implements UserRepository {

    constructor(
        @InjectRepository(UserEntity) private repository: Repository<UserEntity>
    ) {}

    async count(): Promise<number> {
        return this.repository.count();
    }

    async findBySlice(limit: number, offset: number): Promise<User[]> {
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