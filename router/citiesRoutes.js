import { Router } from 'express';
import citiesController from '../controllers/citiesController.js';
const { getAllCities, getOneCity,createOneCity, updateOneCity, deleteOneCity, createMany } = citiesController;
const citiesRouter = Router();

citiesRouter.get('/', getAllCities);
citiesRouter.post('/',createOneCity);
citiesRouter.get('/:id', getOneCity);
citiesRouter.put('/:id',updateOneCity);
citiesRouter.delete('/:id',deleteOneCity);
citiesRouter.post('/many',createMany);


export default citiesRouter;