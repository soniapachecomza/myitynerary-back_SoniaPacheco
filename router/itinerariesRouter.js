import {Router} from 'express';
import itinerariesController from '../controllers/itinerariesController.js';
const itinerariesRouter = Router()
const {getAllItineraries, getOneItinerary,createOneItinerary, updateOneItinerary, deleteOneItinerary}=itinerariesController

itinerariesRouter.get('/', getAllItineraries)
itinerariesRouter.get('/:id', getOneItinerary)
// estos sigientes 3 van a tener que tener un middleware despues 
itinerariesRouter.post('/', createOneItinerary)
itinerariesRouter.put('/:id', updateOneItinerary)
itinerariesRouter.delete('/:id', deleteOneItinerary)

export default itinerariesRouter