import mongoose, { Schema, model, Types } from "mongoose";

const citiesSchema = Schema({
    name:{type: 'string', required: true},
    image:{type: 'string', required: true},
    country:{type: 'string', required: true},
    description:{type: 'string', required: false},
    coin:{type: 'string', required: false},
    itineraries:[{type: mongoose.Types.ObjectId, ref: 'Itinerary', required: true}],
})

let City = model('cities', citiesSchema)

export default City