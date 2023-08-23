import City from '../models/city.js';
const citiesController = {
    getAllCities: async (req, res, next) => {
        const regex = new RegExp(`^${req.query.name.trim()}`, 'i')
        let allCities;
        try{
            allCities=await City.find(req.query.name==""?{}:{title:{$regex:regex}})
            res.json({
                response:allCities,
                success:true
            })
           
        }catch (err){
            next(err);
        }
        

    },
    getOneCity: async (req, res, next) => {
        let oneCity;
        try{
            const {id}=req.params;
            oneCity=await City.findById(id);
            res.json({
                response:oneCity,
                success:true               
            })
        }catch (err){
            next(err);
        }
      
    },
    createOneCity: async (req, res, next) => {
        let city;
        try {
            city = await City.create(req.body)
            res.json({
                response:city,
                success:true
            })
        } catch (err) {
            next(err)
        }
        
    },
    updateOneCity:async (req,res,next)=>{
        const {id}=req.params
        let city;
       
        try {
            city = await City.findOneAndUpdate({_id:id},req.body,{new:true})
            res.json({
                response:city,
                success:true
            })
        } catch (err) {
           
            next(err)
        }
    },
    deleteOneCity:async(req, res, next)=>{
        const {id}=req.params
        let city;
       
        try {
            city = await City.findOneAndDelete({_id:id})
            res.json({
                response:city,
                success :true               
            })
        } catch (err) {
            
            next(err)
        }
    },
    createMany:async(req,res,next)=>{
        let city;
        try {
            city = await City.insertMany(req.body)
            res.json({
                response:city,
                success:true
            })
        } catch (err) {
            next(err)
        }
    }
}
export default citiesController;