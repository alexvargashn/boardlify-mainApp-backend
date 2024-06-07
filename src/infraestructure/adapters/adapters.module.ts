import { Module } from '@nestjs/common';
import { PostgresUserRepository } from '../persistence/boardlify-postgres-db/repositories/postgres-user.repository';
import { PersistenceModule } from '../persistence/persistence.module';

export const USER_REPOSITORY = 'USER_REPOSITORY';


const providers = [
    PostgresUserRepository,
    {
        provide: USER_REPOSITORY,
        useExisting: PostgresUserRepository
    }
]

@Module({
    imports: [
        PersistenceModule
    ],
    providers: [
        ...providers
    ],
    exports: [
        ...providers
    ]
})
export class AdaptersModule {}
