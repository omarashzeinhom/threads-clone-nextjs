import mongoose from 'mongoose';


let isConnected = false; // var to check if mongoose is connected

export const connectToDB = async ()=>{
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL Not found!');
    if (isConnected) return console.log('Mongoose is Already Connected');
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true ;
        console.log(`Connected Successfully to mongoose`);
    }catch (error){
            console.log(error);
    }
}