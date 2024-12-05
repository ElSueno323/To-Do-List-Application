
import type { Request, Response } from 'express';
import {services} from "../app";

export default abstract class TasksController {
    static async getAllTasks(req:Request, res: Response): Promise<void> {
        const tasks = await services.tasksService.getAllTasks();
        res.send(tasks);
    }

}