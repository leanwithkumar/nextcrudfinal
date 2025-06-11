import mongoose from "mongoose";


const mongo_uri = process.env.MONGODB_URI  as string;


if(!mongo_uri){
    throw Error("check the connection string there is some error");
}

let isConnected = false;

const connectingDB = async () : Promise<void>=>{
    
if(isConnected) return;

try{
    await mongoose.connect(mongo_uri);
    isConnected = true;
    console.log("Databse Connected Sucessfully");
} catch(error){
        console.log("unable to Connect Databse", error);
}

}


export default connectingDB;