import { Entity, PrimaryGeneratedColumn, Column, Tree } from "typeorm";
import { RoleEntity } from "./RoleEntity";

@Entity('User')
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
        enum: RoleEntity,
        default: RoleEntity.VISITOR
    })
    roles :RoleEntity

}
