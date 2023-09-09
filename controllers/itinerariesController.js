import Itinerary from '../models/Itinerary.js'
import City from '../models/City.js'

const itinerariesController={
    
    getAllItineraries: async (_, res)=>{
        try{ 
        const itineraries = await Itinerary.find()
        res.json({  
            itineraries,         
            success:true,
            error:null
        })
    } catch(error){console.log(error)}
    }, 
    
    getOneItinerary: async (req, res,next)=>{
        const id = req.params.id
        try{
        const itinerary = await Itinerary.findById(id)
            res.json({
            itinerary,
            success:true,
            error:null
        })
        }catch(error){console.log(error)}
    }, 
    
    getItineraryByCity: async (req, res,next)=>{
        const id = req.params.id
        try{
        const itinerary = await City.findById(id).populate('itineraries')
            res.json({
            itinerary,
            success:true,
            error:null
        })
        }catch(error){console.log(error)}
    }, 
    
    createOneItinerary:async (req, res,next)=>{      
        try{
            if(req.body.city){
                let cityQuery = {name : {$regex : req.body.city.trim(), $options : 'i'}}            
                const city = await City.findOne(cityQuery)
                if(city) {
                    let aux = {...req.body}
                    aux.city = city._id
                    const newItinerary = await Itinerary.create(aux)
                    await City.findOneAndUpdate({ _id: city._id }, { $push: { itineraries: newItinerary._id }})
                    res.json({
                        response: newItinerary,
                        success:true,
                        error:null
                    }) 
                    
                }else{res.json({error : 'City not found', success:false})}
            }else{res.json({error : 'City required', success:false})}
            
            
          
        }catch(error){
            console.log(error) 
        }
        
    },
    
    updateOneItinerary:async (req, res,next)=>{   
        const {id} =req.params
        try{
            let itinerary = await Itinerary.findOneAndUpdate({_id: id}, req.body, {new:true} ) 
            res.json({   
                itinerary,         
                success:true,
                error:null
            })
        }catch(error){
            console.log(error) 
        }
        
        

    },

    
    deleteOneItinerary:async (req, res,next)=>{   
        const {id} =req.params
        try{
            let itinerary = await Itinerary.findOneAndDelete({_id: id}, {new:true} ) 
            res.json({   
                itinerary,         
                success:true,
                error:null
            })
        }catch(error){
            console.log(error) 
        }      

    }
      
}


export default itinerariesController