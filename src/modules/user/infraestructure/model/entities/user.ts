import * as intformat from "biguint-format";
import * as FlakeId from "flake-idgen";
import { Property } from "src/infraestructure/shared/decorators/property.decorator";
import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

const flakeIdGen = new FlakeId();

@Entity({ name: 'user' })
export class UserEntity {

    @PrimaryColumn({ name: 'user_id' })
    @Property()
    userId: string;

    @Column()
    @Property()
    name: string;

    @Property()
    @Column()
    username: string;

    @Property()
    @Column()
    email: string;

    @Property()
    @Column()
    password: string;

    @BeforeInsert()
    generateId() {
        if (!this.userId) {
            this.userId = intformat(flakeIdGen.next(), 'dec');
        }
    }
}