import {Tasks} from "../models/tasks";
import {DataSource} from "typeorm";

/**
 * Service class for managing tasks.
 */
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

    async createTask(task: Tasks): Promise<Tasks> {
        const newtask= await this.tasksRepository
            .save(task);
        return this.getTaskById(newtask.id);
    }

    async deleteTask(task:Tasks): Promise<void> {
        await this.tasksRepository.remove(task).catch(console.error);
    }

    async getTaskById(id:number): Promise<Tasks> {
        const task = await this.tasksRepository
            .createQueryBuilder('t')
            .where('t.id = :id', { id })
            .getOne();
        if (!task) {
            throw new Error('Task not found');
        }
        return task;
    }

    async markTask(task:Tasks): Promise<Tasks>{
        const newTask = await this.tasksRepository
            .createQueryBuilder()
            .update(Tasks)
            .set(task)
            .where('id = :id', { id: task.id })
            .execute();

        return await this.getTaskById(task.id);
    }


}