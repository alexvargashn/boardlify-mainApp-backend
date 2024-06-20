import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { User } from 'src/core/domain/model/entities/user';
import { UserUseCases } from '../../services/user.usecases';
import { Paginated } from '../../utils/Paginated';
import { UsersQuery } from '../impl/users.query';

@QueryHandler(UsersQuery)
export class UsersQueryHandler implements IQueryHandler<UsersQuery> {

    constructor( private user: UserUseCases) {}

    execute(query: UsersQuery): Promise<Paginated<User>> {
        return this.user.getUsers(query);
    }
}