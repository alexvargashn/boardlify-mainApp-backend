import { Module } from '@nestjs/common';
import { AdaptersModule } from './adapters/adapters.module';
import { PersistenceModule } from './persistence/persistence.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    PersistenceModule,
    AdaptersModule,
    SharedModule
  ]
})
export class InfraestructureModule {}
