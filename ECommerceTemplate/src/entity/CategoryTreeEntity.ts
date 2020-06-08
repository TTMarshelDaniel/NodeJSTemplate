

import { Entity, Tree, Column, PrimaryGeneratedColumn, TreeChildren, TreeParent, TreeLevelColumn } from "typeorm";

@Entity()
@Tree("closure-table")
export class CategoryTreeEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @TreeLevelColumn()
    level: number;

    @TreeParent()
    parent: CategoryTreeEntity;

    @TreeChildren()
    children: CategoryTreeEntity[];

}