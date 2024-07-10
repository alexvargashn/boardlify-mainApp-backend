
export class UsersQuery {
    
    constructor(
        public readonly page: number,
        public readonly size: number
    ) {}
    
}

export class UserQueryByTerm {
    constructor(
        public readonly term: string
    ) {}
}