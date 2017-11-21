import { Request, Response } from 'express';

export const getAllUsers = (req: Request, res: Response): any => {
  res.status(200).json({ hello: 'world' });
};
