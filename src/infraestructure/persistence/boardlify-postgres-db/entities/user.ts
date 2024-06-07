import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'user'})
export class UserEntity {
    
    @PrimaryGeneratedColumn({name: 'user_id'})
    userId: string

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;
}