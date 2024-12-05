import express from "express";
import type {Router} from "express";
import tasksRoute from "./tasks/tasks";
export interface IRoute {
    path: string;
    route: Router;
}

const defaultRouter = express.Router();

const routes: IRoute[] = [
    {
        path: '/tasks',
        route: tasksRoute,
    },
];

routes.forEach(r => defaultRouter.use(r.path, r.route));
export default defaultRouter;