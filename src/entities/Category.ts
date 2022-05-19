
import { Entity, Column, CreateDateColumn, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Videos } from './Videos';

@Entity("categories")
export class Category{

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}