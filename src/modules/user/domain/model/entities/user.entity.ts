import { Person } from "./person.entity";

export class User {

    id?: string;
    
    name: string;

    username: string;

    email: string;

    password: string;

    personId?: string;

    person?: Person;
}