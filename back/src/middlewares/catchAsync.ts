import type { NextFunction, Request, Response } from 'express';

export default function catchAsync(
    fn: (req: Request, res: Response) => Promise<void>,
): (req: Request, res: Response, next: NextFunction) => Promise<void> {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await fn(req, res).catch((err): void => {
            next(err);
        });
    };
}