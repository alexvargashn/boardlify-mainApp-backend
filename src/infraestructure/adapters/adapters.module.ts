import { Module } from '@nestjs/common';
import { PostgresUserRepository } from '../persistence/boardlify-postgres-db/repositories/postgres-user.repository';
import { PersistenceModule } from '../persistence/persistence.module';
import { InMemoryEventBus } from './eventbus/in-memory-event-bus.service';

export const USER_REPOSITORY = 'USER_REPOSITORY';


const providers = [
    PostgresUserRepository,
    InMemoryEventBus,
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
