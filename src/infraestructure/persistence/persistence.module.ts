import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/modules/user/infraestructure/model/entities/user';
import { BoardlifyPostgresDbModule } from './boardlify-postgres-db/boardlify-postgres-db.module';

@Module({
  imports: [
    ConfigModule,
    BoardlifyPostgresDbModule,
    TypeOrmModule.forFeature([UserEntity]),
  ],
  exports: [
    BoardlifyPostgresDbModule,
    TypeOrmModule.forFeature([UserEntity]),
  ]
})
export class PersistenceModule {}
