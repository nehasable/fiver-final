const UserRouter = require("./routes/user_route.js");
const express=require("express")
const mongoose=require("mongoose")
const app=express()

const url = 'mongodb+srv://nehasable45:Neha12345@cluster0.z6oczab.mongodb.net/';

mongoose.connect(url);
  
  const db = mongoose.connection;

  db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });
app.use("/api/users",UserRouter)  

app.listen("8000",()=>{
    console.log("connected")
})
