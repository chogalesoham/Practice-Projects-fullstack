import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import pool from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import { errorHandling } from "./middlewares/errorHandler.js"
import { cerateUserTable } from "./data/cerateUserTable.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

//Middlewares
app.use(express.json())
app.use(cors())

//Routes
app.use("/api", userRoutes)

//Error Handling Middlewares
app.use(errorHandling)

//cerate table before starting server 
cerateUserTable()

//Testion POSTGRES Connection
app.get('/api', async (req, res) => {
    const result = await pool.query('SELECT current_database()')
    res.send(`Database name is: ${result.rows[0].current_database}`)
})

//Server Running
app.listen(PORT, () => {
    console.log(`Server Start at PORT: ${PORT}`);
})