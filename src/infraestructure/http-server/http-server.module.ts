import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { CoreModule } from 'src/core/core.module';

@Module({
    imports: [
        CoreModule
    ],
    controllers: [
        UserController
    ]
})
export class HttpServerModule {}
