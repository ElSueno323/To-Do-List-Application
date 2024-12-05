import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


export enum TaskStatus {
    COMPLETED = 'completed',
    PENDING = 'pending',
}

@Entity('tasks')
export class Tasks {
    @PrimaryGeneratedColumn()
    id:number;

    @Column('character varying',{ name:'name', length:32 })
    name: string;

    @Column('character varying',{ name:'description', length:255 })
    description: string;

    @Column('decimal',{ name:'priority_level', scale:2 })
    priority_level: number;

    @Column({ type: 'enum', enum: TaskStatus })
    status: TaskStatus;

    @Column('timestamp',{
        name:"due_time",
    })
    due_time: Date;
}