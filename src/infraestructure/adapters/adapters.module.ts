import { Module } from '@nestjs/common';
import { PersistenceModule } from '../persistence/persistence.module';
import { InMemoryEventBus } from './eventbus/in-memory-event-bus.service';

const providers = [
    InMemoryEventBus,
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
