import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CoreModule } from './core/core.module';
import { HttpServerModule } from './infraestructure/http-server/http-server.module';
import { InfraestructureModule } from './infraestructure/infraestructure.module';
import { SharedModule } from './infraestructure/shared/shared.module';
import { UserModule } from './modules/user/user.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    SharedModule,
    CoreModule,
    HttpServerModule,
    CqrsModule,
    InfraestructureModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
