import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URL)
    .then(() => { console.log("Database conected") })
    .catch(() => { console.log("Database conection faild") })