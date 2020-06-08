import { Entity, PrimaryGeneratedColumn, Column, Tree } from "typeorm";
import { Role } from "./Role";

@Entity('User')
// @Tree()
export class UserEntity {

    @PrimaryGeneratedColumn()
    id? :number;

    @Column()
    firstName? :string;

    @Column()
    lastName? :string;

    @Column()
    age? :number;

    @Column() 
    createdDate? :Date ;

    @Column() 
    updatedDate :Date ;

    @Column({
        type: "enum",
        enum: Role,
        default: Role.VISITOR
    })
    roles :Role

}
