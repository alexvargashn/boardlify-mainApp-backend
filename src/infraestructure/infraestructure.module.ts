import { Module } from '@nestjs/common';
import { UserModule } from 'src/modules/user/user.module';
import { AdaptersModule } from './adapters/adapters.module';
import { PersistenceModule } from './persistence/persistence.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    UserModule,
    AdaptersModule,
    PersistenceModule,
    SharedModule
  ]
})
export class InfraestructureModule {}
