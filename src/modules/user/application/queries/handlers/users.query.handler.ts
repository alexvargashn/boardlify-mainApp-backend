import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { User } from 'src/modules/user/domain/model/entities/user.entity';
import { UserUseCases } from '../../services/user.usecases';
import { Paginated } from '../../utils/Paginated';
import { UserQueryByTerm, UsersQuery } from '../impl/users.query';

@QueryHandler(UsersQuery)
export class UsersQueryHandler implements IQueryHandler<UsersQuery> {

    constructor( private user: UserUseCases) {}

    execute(query: UsersQuery): Promise<Paginated<User>> {
        return this.user.getUsers(query);
    }
}

@QueryHandler(UserQueryByTerm)
export class UserQueryByTermHandler implements IQueryHandler<UserQueryByTerm> {

    constructor( private user: UserUseCases) {}

    execute(query: UserQueryByTerm): Promise<User> {
        return this.user.getUserByTerm(query);
    }
}