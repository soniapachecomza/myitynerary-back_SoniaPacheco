import {Router} from 'express';
import citiesController from '../controllers/citiesController.js';
const citiesRouter = Router()
const {getAllCities, getOneCity,createOneCity, updateOneCity, deleteOneCity}=citiesController

citiesRouter.get('/', getAllCities)
citiesRouter.get('/:id', getOneCity)
// estos sigientes 3 van a tener que tener un middleware despues 
citiesRouter.post('/', createOneCity)
citiesRouter.put('/:id', updateOneCity)
citiesRouter.delete('/:id', deleteOneCity)

export default citiesRouter