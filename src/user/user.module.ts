import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { Person, PersonSchema } from './entities/person.entity';
import { PersonController } from './controllers/person.controller';
import { PersonService } from './services/person.service';

@Module({
  controllers: [UserController, PersonController, ],
  providers: [UserService, PersonService],
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema 
      },
      {
        name: Person.name,
        schema: PersonSchema
      }
    ])
  ]
})
export class UserModule {}
