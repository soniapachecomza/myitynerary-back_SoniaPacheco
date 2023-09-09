import { Schema, model, Types } from "mongoose";
import mongoose from "mongoose";

const infosSchema = Schema({
    itinerary:{type: mongoose.Types.ObjectId, ref: 'Itinerary'},
    likes:{type: 'number', default: 0},
    activities:[{type: 'string', default: ''}],
})

let Info = model('infos', infosSchema)

export default Info