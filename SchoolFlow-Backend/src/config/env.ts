import dotenv from "dotenv";
dotenv.config();

export const env = {
  port: Number(process.env.PORT || 8080),
  jwtSecret: process.env.JWT_SECRET || "change_this_secret",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "15m",
  databaseUrl: process.env.DATABASE_URL || ""
};
