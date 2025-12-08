import { Request, Response, NextFunction } from "express";
import * as authService from "../services/auth.service";

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({ status: "success", data: user });
  } catch (err) {
    next(err);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authService.login(req.body);
    res.json({ status: "success", data: result });
  } catch (err) {
    next(err);
  }
};

export const me = async (req: Request, res: Response) => {
  res.json({ status: "success", data: (req as any).user });
};
