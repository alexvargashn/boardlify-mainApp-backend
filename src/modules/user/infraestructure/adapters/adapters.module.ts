import { Module } from '@nestjs/common';
import { PersistenceModule } from 'src/infraestructure/persistence/persistence.module';
import { PostgresUserRepository } from './repositories/postgres-user.repository';

export const USER_REPOSITORY = 'USER_REPOSITORY';


const providers = [
    PostgresUserRepository,
    //InMemoryEventBus,
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
