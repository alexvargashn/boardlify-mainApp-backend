import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseConfig } from 'src/infraestructure/shared/config/database.config';
import { UserEntity } from './entities/user';
import { TransactionProvider } from './providers/transaction.provider';

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
                    entities: [
                        UserEntity
                    ],
                    synchronize: true,
                    logging: ['query']
                }
            },
            inject: [ConfigService]
        })
    ],
    providers: [
        TransactionProvider
    ],
    exports: [TransactionProvider]
})
export class BoardlifyPostgresDbModule { }
