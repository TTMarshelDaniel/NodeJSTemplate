import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity('Client')
export class ClientEntity {

    @PrimaryGeneratedColumn()
    clientId? :number;

    @Column( {length : 45 })
    userName? :string;

    @Column( { length : 45 })
    password? :string;

    @Column()
    isDeleted? :boolean;

    @Column() 
    createdDate? :Date ;

    @Column() 
    modifiedDate :Date ;
}