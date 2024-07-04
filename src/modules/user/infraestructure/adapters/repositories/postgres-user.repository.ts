import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as intformat from "biguint-format";
import * as FlakeId from "flake-idgen";
import { Repository } from "typeorm";
const flakeIdGen = new FlakeId();

import { PrismaService } from "src/infraestructure/persistence/boardlify-postgres-db/services/prisma.service";
import { User } from "src/modules/user/domain/model/entities/user";
import { UserRepository } from "src/modules/user/domain/ports/outbound/repositories/user.repository";
import { UserEntity } from "../../model/entities/user";

@Injectable()
export class PostgresUserRepository implements UserRepository {

    constructor(
        @InjectRepository(UserEntity) private repository: Repository<UserEntity>,
        private readonly prisma: PrismaService
    ) {}

    async count(): Promise<number> {
        return this.repository.count();
    }

    async findBySlice(limit: number, offset: number): Promise<User[]> {
        return this.prisma.user.findMany({
            skip: offset,
            take: limit
        });
    }

    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async save(user: User): Promise<User> {
        return this.prisma.user.create({
            data: {
                user_id: intformat(flakeIdGen.next(), 'dec'),
                ...user
            } })
    }


}