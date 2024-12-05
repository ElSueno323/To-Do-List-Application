import {ZodObject, ZodOptional, ZodRawShape, ZodType} from "zod";

export interface ZodValidation<T extends ZodRawShape> {
    params?: ZodObject<T>;
    body?: ZodObject<T> | ZodType<T>;
    query?: ZodObject<T> | ZodType<T>;
    file?: ZodObject<T> | ZodOptional<any>;
    files?: ZodType<T>;
}