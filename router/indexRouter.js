import { Router } from 'express';
import citiesRouter from './citiesRoutes.js';
const indexRouter = Router()

indexRouter.get('/', (req, res, next) =>{
    response.send('Bienvenido a mi servidor ')
})

indexRouter.use('/cities', citiesRouter)

export default indexRouter