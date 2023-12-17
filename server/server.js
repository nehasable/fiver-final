const UserRouter = require("./routes/user_route.js");
const express=require("express")
const mongoose=require("mongoose")
const app=express()

const url = 'mongodb://localhost:27017/fiver';

mongoose.connect(url);
  
  const db = mongoose.connection;

  db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });
app.use("/api/users",UserRouter)  

app.listen("8000",()=>{
    console.log("connected")
})
