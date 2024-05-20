import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:1234@localhost:27017/boardlifyDB?authSource=admin'),
    UserModule,
    CoreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
