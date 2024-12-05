import {ZodValidation} from "./zodValidation";
import {NextFunction, Request ,Response} from "express";

export default function validateSchema(
    schema: ZodValidation<any>,
): (req: Request, res: Response, next: NextFunction) => void {
    return (req: Request, res: Response, next: NextFunction): void => {
        try {
            if (req.body && schema.body) {
                req.body = schema.body.parse(req.body);
            }
            if (schema.params) {
                req.params = schema.params.parse(req.params);
            }
            if (schema.query) {
                req.query = schema.query.parse(req.query);
            }
            next();
        } catch (error) {
            next(error);
        }
    };
}