import {Tasks} from "../models/tasks";
import {DataSource} from "typeorm";

export default class TasksService {
    private readonly tasksRepository;

    constructor(dataSource: DataSource) {
        this.tasksRepository = dataSource.getRepository(Tasks);
    }
}