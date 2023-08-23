import 'dotenv/config.js';
import express from 'express';
import indexRouter from './router/indexRouter.js';
import cors from 'cors';
import './config/database.js';
import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFountHandler.js';

const server = express()

server.use(cors());
server.use(express.json());
server.use('/api',(req,res,next)=>{
    console.log("Hicieron una peticion a mi servidor a la ruta "+req.url+
    " de tipo "+req.method+", desde la direccion "+req.get('Origin')+" a la hora "+new Date().toLocaleString())
    next();
},indexRouter);

server.use(notFoundHandler)
server.use(errorHandler);


server.listen(process.env.PORT, () => { console.log("Servidor corriendo en puerto 5500") });