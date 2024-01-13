import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose'
import router from 'router'

const app = express()

app.use(cors({
    credentials: true
}))

app.use(compression()) 
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(8080, () => {
    console.log(`Server running on http://localhost:8080/`)
})

const MONGO_URL = 'mongodb+srv://Sayrikey:Allison1@nodeexpressprojects.hthdf.mongodb.net/TSBACKEND?retryWrites=true&w=majority'
mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on("error", (error: Error) => console.log(error))

app.use("/", router())
// mongodb+srv://Octave:octave001@octave.dnr6tr8.mongodb.net/OCTAVE?retryWrites=true&w=majority