import mongoose from "mongoose";
const db = async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URL)
        console.log(`database connected succesfully`)
    } catch (error) {
        console.log(`database not connected`)
        error
    }
}
export default db;