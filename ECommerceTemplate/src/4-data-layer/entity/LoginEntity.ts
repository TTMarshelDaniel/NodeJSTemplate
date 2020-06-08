import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { RoleEntity } from "./RoleEntity";

@Entity('Login')
export class LoginEntity {

    @PrimaryGeneratedColumn()
    loginId? :number;

    @Column()
    userId? :number;

    @Column( {length : 45 })
    userName? :string;

    @Column( { length : 45 })
    password? :string;

    @Column()
    role? :RoleEntity = RoleEntity.ADMIN;

    @Column()
    isDeleted? :boolean; 
} 