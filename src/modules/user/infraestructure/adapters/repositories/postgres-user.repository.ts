import { Injectable } from "@nestjs/common";
import { isEmail } from "class-validator";

import { PrismaService } from "src/infraestructure/persistence/boardlify-postgres-db/services/prisma.service";
import { isSnowflakeId } from "src/infraestructure/shared/util/helpers/snowflake.helper";
import { User } from "src/modules/user/domain/model/entities/user.entity";
import { UserRepository } from "src/modules/user/domain/ports/outbound/repositories/user.repository";
import { CreateUserDto } from "src/modules/user/shared/dto/create-user.dto";

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
        if (isSnowflakeId(term)) {
            console.log("Si es")
            return this.prisma.user.findUnique({
                where: { userId: term }
            })
        }

        if (isEmail(term)) {
            return this.prisma.user.findFirst({
                where: { email: term }
            });
        }

        return this.prisma.user.findFirstOrThrow({
            where: {
                OR: [
                    { username: term },
                    { name: term }
                ]
            }
        })
    }

    async save(user: CreateUserDto): Promise<User> {
        return this.prisma.$transaction( async(prisma) => {
            
            const person = await prisma.person.create({
                data: user.person
            });

            return await prisma.user.create({
                data: {
                    ...user,
                    person: {
                        connect: { personId: person.personId }
                    }
                },
                include: {
                    person: true
                }
            });
        });
    }

}