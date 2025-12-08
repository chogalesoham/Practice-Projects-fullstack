import prisma from "../repositories/prisma";
import { hashPassword, verifyPassword } from "../libs/password";
import { signJwt } from "../libs/jwt";

export const register = async (data: any) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: data.email }
  });

  if (existingUser) {
    throw { status: 409, message: "Email already registered" };
  }

  const hashed = await hashPassword(data.password);

  return prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        email: data.email,
        password: hashed,
        role: "STUDENT"
      },
      select: { id: true, email: true, role: true }
    });

    await tx.student.create({
      data: {
        userId: user.id,
        firstName: data.firstName,
        lastName: data.lastName
      }
    });

    return user;
  });
};

export const login = async (data: any) => {
  const user = await prisma.user.findUnique({
    where: { email: data.email }
  });

  if (!user) throw { status: 401, message: "Invalid credentials" };

  const ok = await verifyPassword(user.password, data.password);
  if (!ok) throw { status: 401, message: "Invalid credentials" };

  const token = signJwt({ sub: user.id, role: user.role });

  return { accessToken: token };
};
