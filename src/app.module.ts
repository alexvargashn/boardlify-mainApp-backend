import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { HttpServerModule } from './infraestructure/http-server/http-server.module';
import { InfraestructureModule } from './infraestructure/infraestructure.module';

@Module({
  imports: [
    //MongooseModule.forRoot('mongodb://admin:1234@localhost:27017/boardlifyDB?authSource=admin'),
    CoreModule,
    InfraestructureModule,
    HttpServerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
