import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { SharedModule } from './infraestructure/shared/shared.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SharedModule,
    UserModule,
    CqrsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
