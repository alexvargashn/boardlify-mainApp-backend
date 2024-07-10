

export interface CreateUserDto {
    
    name: string;
    
    username: string;
    
    email: string;
    
    password: string;
    
    person: Person;
    
}

export interface Person {

    firstName: string;

    lastName: string;

    genre: string;

}