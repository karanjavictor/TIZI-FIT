import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { router } from './routes/routes.js'


const app = express()
dotenv.config()
if (process.env.NODE_ENV !== 'production') app.use(cors({ credentials: true, origin: ["http://localhost:5173", "http://127.0.0.1:5173", "http://192.168.1.102:5173"] }))
app.use(express.json())
app.use(cookieParser())
app.use('/api', router)
app.get('/', (req, res) => {
    res.status(200).json("active");
})
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})