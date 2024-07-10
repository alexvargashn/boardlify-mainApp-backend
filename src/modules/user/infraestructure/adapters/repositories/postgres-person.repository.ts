import { Injectable } from "@nestjs/common";

import { Prisma } from '@prisma/client';
import { PrismaService } from "src/infraestructure/persistence/boardlify-postgres-db/services/prisma.service";
import { generateSnowflakeId, isSnowflakeId } from "src/infraestructure/shared/util/helpers/snowflake.helper";
import { Person } from "src/modules/user/domain/model/entities/person.entity";
import { PersonRepository } from "src/modules/user/domain/ports/outbound/repositories/person.repository";

@Injectable()
export class PostgresPersonRepository implements PersonRepository {

    constructor(
        private readonly prisma: PrismaService
    ) { }

    async count(): Promise<number> {
        return this.prisma.person.count();
    }

    async findAll(): Promise<Person[]> {
        return this.prisma.person.findMany();
    }

    async findBySlice(limit: number, offset: number): Promise<Person[]> {
        return this.prisma.person.findMany({
            skip: offset,
            take: limit
        });
    }

    async findByTerm(term: string): Promise<Person | Person[]> {
        if(isSnowflakeId(term)) {
            console.log("Si es")
            return this.prisma.person.findUnique({
                where: { personId : term }
            })
        }

        return this.prisma.person.findMany({
            where:{
                OR:[
                    { firstName: term },
                    { lastName: term }
                ]
            }
        })
    }

    async save(personData: Prisma.PersonMaxAggregateOutputType): Promise<Person> {
        return this.prisma.person.create({
            data: {
                personId: generateSnowflakeId(),
                ...personData
            }
        })
    }

}