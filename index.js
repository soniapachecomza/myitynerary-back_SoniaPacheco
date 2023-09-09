import 'dotenv/config'
import express from "express"
import './config/database.js'
import indexRouter from "./router/indexRouter.js"
import cors from 'cors'

const server = express()
const PORT= process.env.PORT
server.use(cors())
server.use(express.json())

server.use('/api', indexRouter)

server.get('/', (req, res, next)=>{
    res.send('Welcome the Mytinerary')
})

server.listen(PORT, ()=>{console.log("Servidor corriendo en el puerto",PORT )})

