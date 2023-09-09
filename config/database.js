import 'dotenv/config.js'
import mongoose from "mongoose"

let uri_link =process.env.DATABASE_URL

mongoose.connect(uri_link)
    .then(()=>{ console.log('Database connection established')})
    .catch(err =>{ console.log(err)})
