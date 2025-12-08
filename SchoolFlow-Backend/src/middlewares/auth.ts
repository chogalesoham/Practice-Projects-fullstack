import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../libs/jwt";
import prisma from "../repositories/prisma";

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  const auth = req.headers.authorization;

  if (!auth || !auth.startsWith("Bearer ")) {
    return res.status(401).json({ status: "error", message: "Unauthorized" });
  }

  try {
    const token = auth.split(" ")[1];
    const decoded = verifyJwt(token);

    const user = await prisma.user.findUnique({
      where: { id: decoded.sub },
      select: { id: true, email: true, role: true }
    });

    if (!user) return res.status(401).json({ status: "error", message: "Unauthorized" });

    (req as any).user = user;

    next();
  } catch {
    return res.status(401).json({ status: "error", message: "Invalid token" });
  }
};
