import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AdaptersModule, USER_REPOSITORY } from 'src/infraestructure/adapters/adapters.module';
import { PersistenceModule } from 'src/infraestructure/persistence/persistence.module';
import { CreateUserHanlder } from './application/commands/handlers/create-user.handler';
import { UserUseCases } from './application/services/user.usecases';
import { UserRepository } from './domain/ports/outbound/repositories/user.repository';
import { UserService } from './domain/services/user.service';

const providers = [
    UserUseCases,
    CreateUserHanlder
]

@Module({
    imports: [
        PersistenceModule,
        AdaptersModule,
        CqrsModule
    ],
    providers: [
        ...providers,
        {
            provide: UserService,
            useFactory: (user: UserRepository) => new UserService(user),
            inject: [USER_REPOSITORY]
        },

        // Use Cases
        {
            provide: UserUseCases,
            useFactory: (user: UserService) => new UserUseCases(user),
            inject: [ UserService ]
        }
    ],
    exports: [
        UserUseCases,
        CqrsModule,
        AdaptersModule,
        ...providers
    ]
})
export class CoreModule {}
