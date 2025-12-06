import pool from "../config/db.js";

export const cerateUserTable = async () => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
    )
    `
    try {
        pool.query(queryText)
        console.log("User table cerated if not exists");

    } catch (error) {
        console.log('Error creating user table: ', error);
    }

}