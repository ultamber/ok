require('dotenv').config({path:'./config.env'});

import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import {json} from 'body-parser'
import mongoose from 'mongoose'
import {connectDB}  from "./config/db";
import {errorHandler} from "./middleware/error";

import {router as routeruser} from "./routes/user" ;
import {router as routerauth} from "./routes/auth";
import {router as routerauction} from "./routes/auction";

const app= express();
const PORT= process.env.PORT || 5000;


//connect to db
connectDB()

app.use(express.json());
app.use(cookieParser());
app.use("/api",routerauth);
app.use("/api", routeruser);
app.use("/api",routerauction);
// app.use("/api/private", require("./routes/private"));

// ErrorHandler (Should be last piece of middleware)
app.use(errorHandler);


const server=app.listen(
    PORT,
    ()=>{
        console.log(`Server is running on port ${PORT}`)
    }
)
process.on("unhandledRejection",(error,promise)=>{
    console.log(`Logged Error: ${error}`);
    server.close(()=>process.exit(1))

})