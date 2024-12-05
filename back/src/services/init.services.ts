import TasksService from './tasks.service';
import type { DataSource } from 'typeorm';

export default class InitService{
    readonly tasksService : TasksService;

    constructor(dataSource: DataSource) {
        this.tasksService = new TasksService(dataSource);
    }
}