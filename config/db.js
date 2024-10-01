import mongoose from "mongoose";
import colors from 'colors'

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Connected: ${conn.connection.host}`.bgBlue.black)
    } catch (error) {
        console.log(`Error in MongoDb ${error}`.bgRed.white)
    }
}

export default connectDB