// import dns from 'node:dns';

// // Force Node.js to use Google's highly reliable public DNS servers
// dns.setServers(['8.8.8.8', '8.8.4.4']); 

import dotenv from "dotenv";
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import connectDB from './db/db_Connection.js'
import { app } from "./app.js";


dotenv.config({
    path:"./.env"
})
connectDB()
.then(()=>{
   app.listen(process.env.PORT  || 8000,()=>{
    console.log(`Server is Runnig at PORT ${process.env.PORT}`)
   })
})
.catch((err)=>{
    console.log("MONGODB connection failed !!! ",err)
})
































// import dotenv from 'dotenv';
// dotenv.config({
//  path:"../.env" 
//});

// const PORT = process.env.PORT || 8000;
// const MONGODB_URI=process.env.MONGODB_URI;
// import mongoose from 'mongoose'
// import { DB_NAME } from './constants.js';
// import express from 'express'

// const app=express();

// ;(async ()=>{

//     try{
//         await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`)
        
//         app.on("error",(error)=>{
//                 console.log("Error : ",error);
//                 throw error
//         });
//     app.listen(PORT,()=>{
//         console.log(`App is listening on PORT ${PORT}`);
//     })
    
//     }
//     catch(error){

//         console.log("ERROR : ",error);
//         throw error;
        
//     }

// })();