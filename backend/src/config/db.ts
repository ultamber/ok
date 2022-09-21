import { ConnectOptions } from 'mongodb';
import mongoose from 'mongoose';
export const connectDB = async ()=> {
    await mongoose.connect(process.env.MONGO_URI!, { ssl: true });
    console.log('MongoDb Connected');   
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

export default {
    port: process.env.port || 3000,
    authCookie: 'auth-cookie',
    latestProductCount: 10
  };