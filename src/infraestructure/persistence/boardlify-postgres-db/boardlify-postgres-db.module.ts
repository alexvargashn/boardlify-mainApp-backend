import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaService } from './services/prisma.service';

@Module({
    imports: [
        ConfigModule,
       
    ],
    providers: [
        PrismaService,
    ],
    exports: [
        PrismaService,
    ]
})
export class BoardlifyPostgresDbModule { }

 // TypeOrmModule.forRootAsync({
        //     useFactory: (config: ConfigService) => {
        //         const db = config.get<DatabaseConfig>('postgres');
        //         return {
        //             type: 'postgres',
        //             host: db.host,
        //             port: db.port,
        //             username: db.user,
        //             password: db.password,
        //             database: db.name,
        //             autoLoadEntities: true,
        //             synchronize: true,
        //             logging: ['query']
        //         }
        //     },
        //     inject: [ConfigService]
        // })
