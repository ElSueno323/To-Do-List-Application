import express from "express";
import TasksController from "../../controllers/tasks.controller";
import validateSchema from "../../validator/validateSchema";
import {
    TaskByIdValidation,
    TaskDeleteByIdValidation,
    TaskMarkByIdValidation,
    TasksCreateValidation
} from "../../validator/tasks";
import catchAsync from "../../middlewares/catchAsync";

const router = express.Router();

router
    .route('/')
    .get(catchAsync(TasksController.getAllTasks))
    .post(
        validateSchema(TasksCreateValidation),
        catchAsync(TasksController.createTask)
    );

router
    .route('/:id')
    .get(
        validateSchema(TaskByIdValidation),
        catchAsync(TasksController.getTaskById)
    )
    .delete(
        validateSchema(TaskDeleteByIdValidation),
        catchAsync(TasksController.deleteTask)
    )
    .patch(
        validateSchema(TaskMarkByIdValidation),
        catchAsync(TasksController.markTask)
    )
export default router;