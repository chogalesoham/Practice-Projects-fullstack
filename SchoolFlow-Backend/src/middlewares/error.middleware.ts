import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("🔥 ERROR:", err);

  const status = err.status || 500;

  return res.status(status).json({
    status: "error",
    message: err.message || "Something went wrong on the server",
    errors: err.errors || null,
  });
};
