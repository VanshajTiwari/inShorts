const dotenv=require('dotenv');
dotenv.config({path:"./config.env"}); 
const Express=require('express');
const cors=require('cors');
const App=Express(); 

const mongoose=require('./DB');
const {DefaultData}=require('./default');
const newRoute=require("./Routes/route");
const PORT=process.env.PORT;

DefaultData();
App.use(cors());
App.get("/",((req,res)=>res.status(200).send("Hello")));

App.use("/",newRoute);
App.listen(PORT,()=>{console.log("Server OK!!")});