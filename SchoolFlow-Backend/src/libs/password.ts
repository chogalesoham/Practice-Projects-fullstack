import argon2 from "argon2";

export const hashPassword = async (plaintext: string) => {
  return argon2.hash(plaintext);
};

export const verifyPassword = async (hash: string, plaintext: string) => {
  return argon2.verify(hash, plaintext);
};
