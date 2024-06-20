import { Module } from '@nestjs/common';
import { UserModule } from 'src/modules/user/user.module';
import { AdaptersModule } from './adapters/adapters.module';
import { HttpServerModule } from './http-server/http-server.module';
import { PersistenceModule } from './persistence/persistence.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    UserModule,
    AdaptersModule,
    HttpServerModule,
    PersistenceModule,
    SharedModule
  ]
})
export class InfraestructureModule {}
