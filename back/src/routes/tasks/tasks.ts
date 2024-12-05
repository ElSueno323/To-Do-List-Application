import express from "express";
import TasksController from "../../controllers/tasks.controller";

const router = express.Router();

router
    .route('/')
    .get(TasksController.getAllTasks)
export default router;