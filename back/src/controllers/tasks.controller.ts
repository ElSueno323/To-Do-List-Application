import type {Request, Response} from 'express';
import {services} from "../app";
import {TaskStatus} from "../models/tasks";

export default abstract class TasksController {
    static async getAllTasks(req:Request, res: Response): Promise<void> {
        const tasks = await services.tasksService.getAllTasks();
        res.send(tasks);
    }

    static async getTaskById(req:Request, res: Response): Promise<void> {
        const task = await services.tasksService.getTaskById(parseInt(req.params.id));
        res.send(task);
    }

    static async createTask(req:Request, res: Response): Promise<void> {
        const task = await services.tasksService.createTask(req.body);
        res.send(task);
    }

    static async deleteTask(req:Request, res: Response): Promise<void> {
        const task = await services.tasksService.getTaskById(parseInt(req.params.id));
        await services.tasksService.deleteTask(task);
        res.send();
    }

    static async markTask(req:Request, res: Response): Promise<void> {
        var task = await services.tasksService.getTaskById(parseInt(req.params.id));
        if(task.status == "pending"){
            task.status= TaskStatus.COMPLETED
            task = await services.tasksService.markTask(task);
            res.send(task);
        }else{
            res.send();
        }
    }

}