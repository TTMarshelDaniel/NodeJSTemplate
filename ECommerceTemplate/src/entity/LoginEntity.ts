import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Role } from "./Role";



@Entity('Login')
// @Tree()
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
    role? :Role = Role.ADMIN;

    @Column()
    isDeleted? :boolean; 
    
} 