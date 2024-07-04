import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseConfig } from 'src/infraestructure/shared/config/database.config';
import { TransactionProvider } from './providers/transaction.provider';
import { PrismaService } from './services/prisma.service';

@Module({
    imports: [
        ConfigModule,
        TypeOrmModule.forRootAsync({
            useFactory: (config: ConfigService) => {
                const db = config.get<DatabaseConfig>('postgres');
                return {
                    type: 'postgres',
                    host: db.host,
                    port: db.port,
                    username: db.user,
                    password: db.password,
                    database: db.name,
                    autoLoadEntities: true,
                    synchronize: true,
                    logging: ['query']
                }
            },
            inject: [ConfigService]
        })
    ],
    providers: [
        PrismaService,
        TransactionProvider
    ],
    exports: [
        PrismaService,
        TransactionProvider
    ]
})
export class BoardlifyPostgresDbModule { }
