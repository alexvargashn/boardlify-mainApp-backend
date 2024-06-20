import { IQueryHandler } from '@nestjs/cqrs';
import { UserUseCases } from '../../services/user.usecases';
import { UsersQuery } from '../impl/users.query';


export class UsersQueryHandler implements IQueryHandler<UsersQuery> {

    constructor( private user: UserUseCases) {}

    execute(query: UsersQuery){
        return this.user.getUsers(query);
    }
}