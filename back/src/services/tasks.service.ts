import {Tasks} from "../models/tasks";
import {DataSource} from "typeorm";

export default class TasksService {
    private readonly tasksRepository;

    constructor(dataSource: DataSource) {
        this.tasksRepository = dataSource.getRepository(Tasks);
    }

    async getAllTasks(): Promise<Tasks[]> {
        const query = this.tasksRepository
            .createQueryBuilder('t')
            .orderBy('due_time');
        return await query.getMany();
    }
}