import { Module } from '@nestjs/common';
import { UserModule } from 'src/modules/user/user.module';
import { UserController } from './controllers/user.controller';

@Module({
    imports: [
       UserModule
    ],
    controllers: [
        UserController
    ]
})
export class HttpServerModule {}
