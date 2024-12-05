import {ZodValidation} from "./zodValidation";
import {z} from "zod";

/**
 * Regular expression pattern to validate strings formatted as a date-time representation.
 * Examples of strings that would match this pattern include:
 * - "2023-10-15T18:30"
 * - "1999-01-01T00:00"
 */
const isDate = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;

export const TasksCreateValidation: ZodValidation<any> = {
    body: z.object({
        name: z.string().min(1).max(32),
        description: z.string().min(1).max(255),
        priority_level: z.number().min(1).max(10),
        status: z.enum(['cleaning','pending']),
        due_time: z.string().trim().regex(isDate),
    })
}

export const TaskByIdValidation: ZodValidation<any> = {
    params: z.object({
        id: z.string().min(1).max(4),
    }).required()
}

export const TaskDeleteByIdValidation: ZodValidation<any> = {
    params: z.object({
        id: z.string().min(1).max(4),
    }).required()
}

export const TaskMarkByIdValidation: ZodValidation<any> = {
    params: z.object({
        id: z.string().min(1).max(4),
    }).required()
}