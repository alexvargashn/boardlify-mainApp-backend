import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { AdaptersModule } from './adapters/adapters.module';
import { HttpServerModule } from './http-server/http-server.module';
import { PersistenceModule } from './persistence/persistence.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    CoreModule,
    AdaptersModule,
    HttpServerModule,
    PersistenceModule,
    SharedModule
  ]
})
export class InfraestructureModule {}
