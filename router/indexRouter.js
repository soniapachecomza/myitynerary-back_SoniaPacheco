import { Router } from 'express';
import citiesRouter from './citiesRouter.js';
import itinerariesRouter from '../router/itinerariesRouter.js';
const indexRouter= Router();

indexRouter.get('/', (require, response, next)=>{
    response.send('API')
})
indexRouter.use('/cities', citiesRouter)
indexRouter.use('/itineraries', itinerariesRouter)


export default indexRouter;