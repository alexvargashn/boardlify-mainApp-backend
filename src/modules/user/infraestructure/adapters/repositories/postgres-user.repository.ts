import { Injectable } from "@nestjs/common";
import { isEmail } from "class-validator";
import * as FlakeId from "flake-idgen";

import { PrismaService } from "src/infraestructure/persistence/boardlify-postgres-db/services/prisma.service";
import { generateSnowflakeId, isSnowflakeId } from "src/infraestructure/shared/util/helpers/snowflake.helper";
import { User } from "src/modules/user/domain/model/entities/user";
import { UserRepository } from "src/modules/user/domain/ports/outbound/repositories/user.repository";

const flakeIdGen = new FlakeId(); 
@Injectable()
export class PostgresUserRepository implements UserRepository {

    constructor(
        private readonly prisma: PrismaService
    ) { }

    async count(): Promise<number> {
        return this.prisma.user.count();
    }

    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async findBySlice(limit: number, offset: number): Promise<User[]> {
        return this.prisma.user.findMany({
            skip: offset,
            take: limit
        });
    }

    async findByTerm(term: string): Promise<User> {
        if(isSnowflakeId(term)) {
            return this.prisma.user.findUnique({
                where: { user_id: term }
            })
        }

        if(isEmail(term)) {
            return this.prisma.user.findFirst({
                where: { email: term }
            });
        }

        return this.prisma.user.findFirstOrThrow({
            where:{
                OR:[
                    { username: term },
                    { name: term }
                ]
            }
        })
    }

    async save(user: User): Promise<User> {
        return this.prisma.user.create({
            data: {
                user_id: generateSnowflakeId(),
                ...user
            }
        })
    }

}