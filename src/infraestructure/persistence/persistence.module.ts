import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardlifyPostgresDbModule } from './boardlify-postgres-db/boardlify-postgres-db.module';
import { UserEntity } from './boardlify-postgres-db/entities/user';

@Module({
  imports: [
    BoardlifyPostgresDbModule,
    ConfigModule,
    TypeOrmModule.forFeature([
      UserEntity
    ])
  ],
  exports: [
    BoardlifyPostgresDbModule,
    TypeOrmModule.forFeature([
      UserEntity
    ])
  ]
})
export class PersistenceModule {}
