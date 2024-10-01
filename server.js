import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoute from './routes/authRoute.js'

// configure  dotenv
dotenv.config()

// databse config
connectDB()

// rest object
const app = express()

// middleware
app.use(express.json())
app.use(morgan('dev'))


// routes
app.use('/api/v1/auth', authRoute)


// rest api
app.get('/', (req, res) => {
    res.send('Hello World')
    })

// PORT
const PORT = process.env.PORT || 8000
app.listen(PORT,() => {
    console.log(`server running on ${PORT}`.bgCyan.white)
})