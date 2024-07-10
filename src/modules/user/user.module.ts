import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventBusPublisherService } from 'src/infraestructure/adapters/eventbus/event-bus-publisher';
import { CreateUserHanlder } from './application/commands/handlers/create-user.handler';
import { UserCreatedHandler } from './application/events/handlers/UserCreatedHandler';
import { UserQueryByTermHandler, UsersQueryHandler } from './application/queries/handlers/users.query.handler';
import { UserUseCases } from './application/services/user.usecases';
import { EventBusPublisher } from './domain/ports/inbound/event-bus-publisher';
import { UserRepository } from './domain/ports/outbound/repositories/user.repository';
import { UserService } from './domain/services/user.service';
import { AdaptersModule, USER_REPOSITORY } from './infraestructure/adapters/adapters.module';
import { UserController } from './infraestructure/controllers/user.controller';


export const EVENTBUS = 'EVENTBUS';

const providers = [
    UserUseCases,
    CreateUserHanlder,
    UsersQueryHandler,
    UserQueryByTermHandler,
    UserCreatedHandler,
    EventBusPublisherService
]

@Module({
    imports: [
        AdaptersModule,
        CqrsModule,
    ],
    providers: [
        ...providers,
        {
            provide: EVENTBUS,
            useExisting: EventBusPublisherService
        },
        {
            provide: UserService,
            useFactory: (
                user: UserRepository,
                eventbus: EventBusPublisher
            ) => new UserService(user, eventbus),
            inject: [
                USER_REPOSITORY,
                EVENTBUS
            ]
        },

        // Use Cases
        {
            provide: UserUseCases,
            useFactory: (user: UserService) => new UserUseCases(user),
            inject: [ UserService ]
        },
    ],
    exports: [
        UserUseCases,
        CqrsModule,
        AdaptersModule,
        ...providers
    ],
    controllers: [
        UserController
    ]
})
export class UserModule {}
