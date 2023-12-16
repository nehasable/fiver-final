const express=require("express")
const mongoose=require("mongoose")
const app=express()

const url = 'mongodb://localhost:27017/fiver';

mongoose.connect(url, {

    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection;

  db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });
  
app.listen("8000",()=>{
    console.log("connected")
})
