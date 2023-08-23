import mongoose, {Schema} from "mongoose";

const citySchema = Schema({
    title: {type: String, required: true },
    href: {type: String, required: true },
    country: {type: String, required: true },
    continent: {type: String, required: true },
    description:{type: String },
    current: {type: String, required: true }
},{
    timestamps: true
})

const city=mongoose.model('city',citySchema);

export default city;