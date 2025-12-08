import argon2 from "argon2";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export const hashPassword = async (plaintext: string) => {
  return argon2.hash(plaintext);
};

export const verifyPassword = async (hash: string, plaintext: string) => {
  return argon2.verify(hash, plaintext);
};

export const signJwt = (payload: any, expiresIn: string = "7d") => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn } as any);
};

export const verifyJwt = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
