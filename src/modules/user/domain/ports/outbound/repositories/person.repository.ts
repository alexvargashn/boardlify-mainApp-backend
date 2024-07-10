import { Person } from "../../../model/entities/person.entity";



export interface PersonRepository {

    findAll(): Promise<Person[]>;

    findBySlice(limit: number, offset: number): Promise<Person[]>;

    findByTerm(term: string): Promise<Person | Person[]>;

    save(personData: Person): Promise<Person>;

    count(): Promise<number>;
    
}