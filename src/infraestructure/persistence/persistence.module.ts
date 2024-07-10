import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BoardlifyPostgresDbModule } from './boardlify-postgres-db/boardlify-postgres-db.module';

@Module({
  imports: [
    ConfigModule,
    BoardlifyPostgresDbModule,
  ],
  exports: [
    BoardlifyPostgresDbModule,
  ]
})
export class PersistenceModule {}
